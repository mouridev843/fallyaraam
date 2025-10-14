import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "git@github.com:mouridev843/fallyaraam.git",
  server: {
    port: 3000,
    open: true,
  },
});
