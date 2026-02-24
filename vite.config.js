import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/task-dashboard/", // ⚠ repo name same hona chahiye
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    sourcemap: false, // production me source map off
  },
});