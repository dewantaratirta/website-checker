// import adapter from '@sveltejs/adapter-auto';
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
		}
	}
};

export default config;
