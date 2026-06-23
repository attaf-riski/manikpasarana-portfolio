// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://manikparasara-edited.attaf.my.id',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Use sharp for build-time image optimization
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
