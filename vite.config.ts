import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Safely expose the API_KEY from Vercel environment to the client bundle
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});