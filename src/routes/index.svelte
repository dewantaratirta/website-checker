<script>
	import CheckHost from '$lib/CheckHost.svelte';
	import DnsList from '$lib/DnsList.svelte';
	import { hosts } from '$lib/HostList.js';

	// selected dns value
	let selectedDns = '';
	// save component element
	let hostComponent = [];

	let btnText = 'Go!';

	const dnsChanged = (e) => {
		selectedDns = e.detail;
		hostComponent.forEach((v, i) => {
			v.doCheck(e.detail);
		});
		btnText = 'Restart ';
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
		<DnsList text={btnText} on:dnschange={dnsChanged} />

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
