// Vite Imports
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// NodeJs Imports
import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  void configEnv;

  return {
    plugins: [react()],

    // Path Alias
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    // ** CSS
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss" as *;`,
        },
      },
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },

    base: "./",

    build: {
      outDir: resolve(__dirname, "../dist"),
      emptyOutDir: true,

      manifest: false,
      // sourcemap: true,

      rollupOptions: {
        input: {
          main: resolve(__dirname, "./src/main.tsx"),
        },
        output: {
          entryFileNames: "warpdriven-recs-app-[name].js",
          assetFileNames: "[name][extname]",
          chunkFileNames: "[name]-[hash].js",
        },
      },
    },

    server: {
      port: 3002,
      proxy: {
        "/wp-admin/admin-ajax.php": {
          target: "https://stg.emutree.com.au",
          changeOrigin: true,
          ws: true,
          rewrite(path) {
            return path;
          },
        },
        "/wp-json/wc/v3": {
          target: "https://stg.emutree.com.au",
          changeOrigin: true,
          ws: true,
          // rewrite(path) {
          //   return path.replace(/^\/woo/, "");
          // },
        },
      },
    },
  };
});
