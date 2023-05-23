import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

import cssnano from "cssnano";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: "*",
      includeManifestIcons: true,
      manifest: {
        id: "starter.example",
        name: "React PWA Starter",
        short_name: "Starter",
        description: "Full React TypeScript starter with automatic bundling into a progressive web app",
        theme_color: "#42b883",
        background_color: "#ffffff",
        orientation: "any",
        icons: [
          {
            src: "/icon-100x100.png",
            sizes: "100x100",
            type: "image/png",
          },
          {
            src: "/icon-180x180.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-225x225.png",
            sizes: "225x225",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss({ config: ".tailwindrc.cjs" }), autoprefixer(), cssnano()],
    },
  },
});
