import vercelStatic from '@astrojs/vercel/static'
import { defineConfig } from 'astro/config'

export default defineConfig({
	adapter: vercelStatic({
		maxDuration: 8,
		webAnalytics: {
			enabled: false
		}
	}),
	integrations: [],
	output: 'static'
})
