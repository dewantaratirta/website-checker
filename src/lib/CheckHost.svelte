<script>
	import { query } from 'dns-query';
	import { onMount } from 'svelte';
	export let url;
	export let name;
	export let icon = '';

	let dns = '1.0.0.1';
	let ip = '';
	// state = empty|loading|true|false;
	let nameserverResolveState = 'empty';
	let domainPingState = 'empty';
	export let iconOverride = '';
	var pingResult;
	var p = [];
	var stateResultClass;
	var id = '';

	onMount(() => {
		id = makeid();
		let conf = {};
		if (iconOverride != '') {
			conf.favicon = iconOverride;
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
		p[id].ping('https://' + url, function (err, data) {
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

<article class={stateResultClass}>
	<header>
		{#if icon != ''}
			<i class={icon} />
		{/if}
		{name}
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
				{#if domainPingState}
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
