import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://AlanGuillenZ.github.io',
  base: '/example1/',
  adapter: cloudflare(),
});
