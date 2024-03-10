import tailwind from '@astrojs/tailwind'
import vercelStatic from '@astrojs/vercel/static'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	adapter: vercelStatic({
		maxDuration: 8,
		webAnalytics: {
			enabled: false
		}
	}),
	integrations: [tailwind()],
	output: 'static'
})
