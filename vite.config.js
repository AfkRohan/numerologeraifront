import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    allowedHosts: [
      '.sidepro.app', // allow all SidePro subdomains
      'numerologeraifront-jun21-701pm-47s-rohan-shah-beta.platform.beta.sidepro.app'
    ],
  }
})
