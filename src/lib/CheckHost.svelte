<script>
	import { query } from 'dns-query';
	import { onMount } from 'svelte';
	let url;
	let name;
	let icon = '';
	export var hostData = {};

	// let dns = '1.0.0.1';
	// let ip = '';

	// state = empty|loading|true|false;
	let nameserverResolveState = 'empty';
	let domainPingState = 'empty';
	var pingResult = 0;
	var p = [];
	var stateResultClass;
	var id = '';

	onMount(() => {
		id = makeid();
		// config ping
		let conf = {};
		console.log(hostData);
		if (hostData.overrideIcon != '') {
			console.log('do this');
			conf.favicon = hostData.overrideIcon;
		}

		p[id] = new Ping(conf);
	});

	const resultContains = (state) => {
		// if (nameserverResolveState == state || domainPingState == state) return true;
		if (domainPingState == state) return true;
		return false;
	};
	const resultBoth = (state) => {
		// if (nameserverResolveState == state && domainPingState == state) return true;
		if (domainPingState == state) return true;
		return false;
	};

	const makeid = (length = 5) => {
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};

	const checkResultClass = () => {
		let res = '';
		switch (true) {
			case resultContains('loading'):
				res = 'warning';
				console.log(nameserverResolveState, domainPingState);
				break;

			case resultContains(false):
				res = 'fail';
				break;

			case resultBoth(true):
				res = 'success';
				break;
			default:
				res = '';
				break;
		}
		return (stateResultClass = res);
	};

	export const doCheck = async (data) => {
		// NS Resolve
		// try {
		// 	nameserverResolveState = 'loading';
		// 	let x = query({ question: { type: 'A', name: url } }, { endpoints: [dns] }).then((res) => {
		// 		let { answers, rcode } = res;
		// 		nameserverResolveState = rcode == 'NOERROR' ? true : false;
		// 	});
		// } catch (err) {
		// 	nameserverResolveState = false;
		// }
		checkResultClass();

		const startTime = new Date().getTime();
		p[id].ping('https://' + hostData.host, function (err, data) {
			domainPingState = 'loading';
			// Also display error if err is returned.
			const resultTime = new Date().getTime();
			if (err) {
				console.log('error loading resource');
				data = url + data + ' ' + err;
				domainPingState = false;
			} else {
				pingResult = resultTime - startTime;
				domainPingState = true;
			}
			pingResult = resultTime - startTime;
			checkResultClass();
		});

		checkResultClass();
	};
</script>

<style>
	h4 {
		text-transform: uppercase;
	}

	a.cardlink {
		margin: var(--block-spacing-vertical) 0;
	}
	a.cardlink ul {
		color: var(--secondary-inverse) !important;
	}
	a.cardlink header {
		color: var(--h4-color) !important;
	}
	a.cardlink:hover,
	a.cardlink:focus {
		text-decoration: none !important;
		background-color: var(--background-color) !important;
		color: var(--color) !important;
	}
	a.cardlink article {
		margin: 0px !important;
	}
	article.fail,
	article.fail > header {
		background: rgb(233 58 58 / 56%);
	}

	article.success,
	article.success > header {
		background: rgb(81 199 60 / 56%);
	}

	article.warning,
	article.warning > header {
		background: rgb(199 188 60 / 56%);
	}
</style>

<a href="http://{hostData.mainUrl}" target="__blank" class="cardlink">
	<article class={stateResultClass}>
		<header>
			{#if hostData.icon != ''}
				<i class={hostData.icon} />
			{/if}
			{hostData.name}
		</header>
		<body>
			<ul>
				<!-- {#if nameserverResolveState != 'empty'}
				{#if nameserverResolveState == 'loading'}
					<li>Loading ...</li>
				{/if}
				{#if nameserverResolveState}
					<li>Success</li>
				{/if}
				{#if nameserverResolveState == false}
					<li>Domain not found</li>
				{/if}
			{:else}
				<li>Nameserver Check</li>
			{/if} -->

				{#if domainPingState != 'empty'}
					{#if domainPingState == 'loading'}
						<li>Pinging Server</li>
					{/if}
					{#if domainPingState == true}
						<li>Ping Success</li>
					{/if}
					{#if domainPingState == false}
						<li>Ping Failed</li>
					{/if}
				{:else}
					<li>Check Ping</li>
				{/if}
			</ul>
		</body>
	</article>
</a>
