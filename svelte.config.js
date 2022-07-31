import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app',
		adapter: adapterStatic({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
		}),
		prerender: {
			default: true
		},
		paths: {
			// YOUR github repository name
			base: "/website-checker",
		},
	}
};

export default config;
