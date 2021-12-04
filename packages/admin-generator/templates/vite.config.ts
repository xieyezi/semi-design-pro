import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
	resolve: {
		alias: {
			'@src': resolve(__dirname, './src'),
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/components'),
			'@pages': resolve(__dirname, './src/pages'),
			'@uitls': resolve(__dirname, './src/uitls'),
			'@styles': resolve(__dirname, './src/styles'),
			'@config': resolve(__dirname, './src/config'),
			'@mock': resolve(__dirname, './mock')
		}
	},
	plugins: [
		react(),
		viteMockServe({
			mockPath: 'mock',
			localEnabled: true
		})
	],
	build: {
		target: 'es2015',
		minify: 'terser',
		cssCodeSplit: true,
		rollupOptions: {
			plugins: []
		}
	},
	server: {
		proxy: {
			'/api': {
				target: '',
				changeOrigin: true,
				rewrite: (path: string) => path.replace(/^\/api/, '')
			}
		},
		hmr: {
			overlay: false
		}
	}
})
