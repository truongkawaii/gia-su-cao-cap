import { defineConfig } from "vite";

export default defineConfig({
  // Use relative paths so it works on any subdirectory (like GitHub Pages repo)
  base: "./",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        lecture: "bai-giang.html",
      },
    },
  },
});
