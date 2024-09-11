import vercelStatic from '@astrojs/vercel/static'
import storyblok from '@storyblok/astro'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
	adapter: vercelStatic({
		maxDuration: 8,
		webAnalytics: {
			enabled: false
		}
	}),
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_PREVIEW_TOKEN,
			apiOptions: {
				region: 'eu'
			},
			components: {
				blogPost: 'storyblok/BlogPost'
			}
		})
	],
	output: 'static'
})
