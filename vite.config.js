import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    allowedHosts: [
      '.sidepro.app', // allow all SidePro subdomains
      'numerologeraifront-jun21-617pm-00s-rohan-shah-beta.platform.beta.sidepro.app'
    ],
    host: '0.0.0.0' // optional: ensures Vite listens on all interfaces
  }
})
