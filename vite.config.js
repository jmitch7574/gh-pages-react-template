import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

const REPO_NAME = 'gh-pages-react-template'; // YOUR REPO NAME HERE

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: 'public/*', dest: '' }],
    }),
  ],
  base: `/${REPO_NAME}/`
})
