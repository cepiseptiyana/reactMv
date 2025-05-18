import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/reactMv/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@Components": path.resolve(__dirname, "./src/Components"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
});
