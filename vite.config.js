import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		splitVendorChunkPlugin()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	
});
