const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);

export default (await import("vite")).defineConfig(async () => ({
	publicDir: "./Public",
	plugins: [(await import("vite-plugin-solid")).default()],
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
		host: mobile ? "0.0.0.0" : false,
		hmr: mobile
			? {
					protocol: "ws",
					host: await (await import("internal-ip")).internalIpV4(),
					port: 1421,
			  }
			: undefined,
		watch: {
			ignored: ["**/src-tauri/**"],
		},
	},
	build: {
		target: "chrome105",
		outDir: "Target",
		minify: process.env["TAURI_DEBUG"] ? false : "esbuild",
		sourcemap: !!process.env["TAURI_DEBUG"],
	},
}));
