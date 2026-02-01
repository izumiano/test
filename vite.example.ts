import { biomePlugin } from "@pbr1111/vite-plugin-biome";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), biomePlugin()],
	base: "/test/",
	build: {
		rollupOptions: {
			output: {
				// ==For GitHub Pages==
				entryFileNames: `[name].js`,
				chunkFileNames: `[name]-[hash].js`,
				assetFileNames: `[name]-[hash].[extname]`,
				// ====================
			},
		},
	},
});
