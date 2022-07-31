<script>
	import CheckHost from '$lib/CheckHost.svelte';
	import DnsList from '$lib/DnsList.svelte';

	var hosts = [
		{ name: 'Dota2', host: 'dota2.com', icon: '', overrideIcon: '', mainUrl: 'dota2.com' },
		{
			name: 'Counter Strike',
			host: 'counter-strike.net',
			icon: '',
			overrideIcon: '',
			mainUrl: 'counter-strike.net'
		},
		{
			name: 'Origin',
			host: 'origin.com',
			icon: '',
			overrideIcon: '',
			mainUrl: 'origin.com'
		},
		{
			name: 'Google',
			host: 'google.com',
			icon: 'fab fa-google fa-fw',
			overrideIcon: '',
			mainUrl: 'counter-strike.net'
		},
		{
			name: 'Steam',
			host: 'steamcommunity.com',
			icon: 'fab fa-steam fa-fw',
			overrideIcon: '',
			mainUrl: 'steamcommunity.com'
		},
		{
			name: 'Paypal',
			host: 'paypal.com',
			icon: 'fab fa-paypal fa-fw',
			overrideIcon: '',
			mainUrl: 'paypal.com'
		},
		{
			name: 'Twitch',
			host: 'twitch.tv',
			icon: 'fab fa-twitch fa-fw',
			overrideIcon: '',
			mainUrl: 'twitch.tv'
		},
		{
			name: 'Telegram',
			host: 'telegram.org',
			icon: 'fa-brands fa-telegram',
			overrideIcon: '',
			mainUrl: 'telegram.org'
		},
		{
			name: 'Epic Games',
			host: 'static-assets-prod.epicgames.com',
			icon: '',
			overrideIcon: '/epic-store/static/favicon.ico',
			mainUrl: 'epicgames.com'
		},
		{
			name: 'SoundCloud',
			host: 'soundcloud.com',
			icon: 'fa-brands fa-soundcloud',
			overrideIcon: '',
			mainUrl: 'soundcloud.com'
		},
		{
			name: 'Nintendo',
			host: 'assets.nintendo.com',
			icon: 'fa-solid fa-game-console-handheld',
			overrideIcon: '/image/upload/ncom/icons/fav-icons/favicon.ico',
			mainUrl: 'nintendo.com'
		},
		{
			name: 'Reddit',
			host: 'reddit.com',
			icon: 'fa-brands fa-reddit',
			overrideIcon: '',
			mainUrl: 'reddit.com'
		}
	];

	// selected dns value
	let selectedDns = '';
	// save component element
	let hostComponent = [];

	const dnsChanged = (e) => {
		selectedDns = e.detail;
		hostComponent.forEach((v, i) => {
			v.doCheck(e.detail);
		});
	};
</script>

<style>
	@media (min-width: 992px) {
		.grid {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
	}
	@media (min-width: 576px) {
		.grid {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media (max-width: 575px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	body > main {
		--block-spacing-vertical: calc(var(--spacing) * 1) !important;
	}
	/* root::--block-spacing-vertical: calc(var(--spacing) * 4); */
</style>

<body>
	<main class="container">
		<h1>Simple Server Checker</h1>
		<p>Cek koneksi kamu ke server berikut</p>
		<DnsList on:dnschange={dnsChanged} />

		<div class="grid">
			{#each hosts as host, i}
				<CheckHost hostData={host} bind:this={hostComponent[i]} />
			{/each}
		</div>
	</main>
</body>

<svelte:head>
	<title>Simple Server Checker</title>
	<meta name="description" content="Cek koneksi server keblokir kominfod" />
	<html lang="id" />
</svelte:head>
