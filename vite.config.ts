import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig( ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.game_hub_api_key': JSON.stringify(env.game_hub_api_key)
    },
    plugins: [react()],
  }
})
