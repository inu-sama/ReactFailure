import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "grab-food",
      filename: "remoteEntry.js",
      remotes: {
        headerAndFooter: "http://localhost:5001/assets/remoteEntry.js",
      },
      exposes: {
        "./MainContent": "./src/components/MainContent",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    cors: {
      origin: 'http://localhost:5173',
    },
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:5173',
      'access-control-allow-headers': 'http://localhost:5173',
    }
  }
})
