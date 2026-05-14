import { fileURLToPath, URL } from 'node:url'
import { defineConfig }       from 'vite'
import vueDevTools            from 'vite-plugin-vue-devtools'
import path                   from "path";
import vue                    from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    hmr: false
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "easy-form",
      fileName: (format) => `easy-form.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    }
  },
})
