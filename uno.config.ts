// uno.config.ts
import { defineConfig, presetIcons, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        ic: () => import('@iconify-json/ic/icons.json').then(i => i.default),
      }
    }),
    presetTypography(),
  ],
  safelist: [
    'i-ic-round-whatsapp',
    'i-lucide-github',
    'i-lucide-instagram',
    'i-lucide-twitter',
    'i-lucide-linkedin',
    'i-lucide-youtube',
    'i-lucide-menu',
    'i-lucide-x',
  ],
})