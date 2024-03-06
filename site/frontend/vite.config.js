import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "registerType": 'autoUpdate',
        "name":"Beehive Corporation",
        "short_name":"Beehive",
        "display": "standalone",
        "background_color": "#071952",
        "theme_color": "#071952",
        "icons":[
          {
            src: "Business/Beehive/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Beehive/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      } 
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
