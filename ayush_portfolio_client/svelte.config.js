// import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import IISAdapter from 'sveltekit-adapter-iis';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: IISAdapter({
			// the hostname/port that the site will be hosted on in IIS.
			// can be changed later in web.config
			// origin: 'http://192.168.50.118:9092/'
			// ... other options
		})
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
