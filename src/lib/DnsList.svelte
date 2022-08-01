<script>
	import { onMount, createEventDispatcher } from 'svelte/internal';
	export let text = 'Go!';

	const dns = [
		{ name: 'tk', ip: 'nsjkt1.telkom.net.id' },
		{ name: 'tri', ip: '10.0.31.66' },
		{ name: 'google', ip: '8.8.8.8' },
		{ name: 'cloudflare', ip: '1.1.1.1' }
	];

	let selected;
	let invalid = '';
	const dispatch = createEventDispatcher();

	const clickHandler = (ev) => {
		dispatch('dnschange', 'go');
	};
</script>

<div>
	<div class="grid" />
	<button on:click={clickHandler}>{text}</button>
</div>
