
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'ATAFO CONSULTATION',
        short_name: 'ATAFO',
        description: 'ATAFO Consultation and Measurement Application',

        theme_color: '#B85C38',
        background_color: '#ffffff',

        display: 'standalone',
        start_url: '/',
        scope: '/',

        icons: [
          {
            src: '/atafo-logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/atafo-logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
