import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { splitVendorChunkPlugin } from 'vite';
//import { resolve } from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		splitVendorChunkPlugin()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		rollupOptions: {
		  watch: {

			 },
		},
	  },
});
