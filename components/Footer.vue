<script setup lang="ts">
import { socialLinks } from '~/constants/nav';
</script>

<template>
  <footer class="border-t border-white/10">
    <div class="container mx-auto px-4 md:px-6 py-10">

      <!-- Üst Kısım -->
      <div class="flex flex-col items-center text-center gap-8 lg:flex-row lg:items-start lg:text-left lg:justify-between lg:gap-10">

        <!-- Hakkımızda -->
        <div class="footer-section max-w-md">
          <h4 class="footer-heading">Hakkımızda</h4>
          <p class="text-sm leading-relaxed text-[var(--ink-muted)]">
            Yazılımın gücünü hayata geçiren bir ekibiz. <br class="hidden sm:block">
            Yaratıcı çözümler ve modern teknolojilerle dijital dünyayı şekillendiriyoruz.
          </p>
        </div>

        <!-- Sosyal Medya -->
        <div class="footer-section">
          <h4 class="footer-heading">Sosyal Medya</h4>
          <div class="flex justify-center lg:justify-start flex-wrap gap-3">
            <NuxtLink
              v-for="social in socialLinks"
              :key="social.to"
              :to="social.to"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="social-icon p-3 rounded-full transition"
            >
              <span :class="social.icon" class="h-5 w-5 block"></span>
            </NuxtLink>
          </div>
        </div>

        <!-- İletişim -->
        <div class="footer-section">
          <h4 class="footer-heading">İletişim</h4>

          <p class="mb-1">
            <a href="mailto:orucbertan7@gmail.com" class="footer-link">
              orucbertan7@gmail.com
            </a>
          </p>

          <p>
            <a href="tel:+905411507217" class="footer-link">
              +90 541 150 72 17
            </a>
          </p>
        </div>

      </div>

      <!-- Alt Çizgi -->
      <div class="footer-bottom border-t border-white/10 mt-8 pt-5 text-center text-xs text-[var(--ink-muted)] flex flex-col sm:flex-row sm:justify-between gap-2">
        <p>&copy; 2025 Bertan Örüç. Tüm hakları saklıdır.</p>
        <p class="flex justify-center gap-3">
          <a href="#" class="footer-link">Gizlilik Politikası</a>
          <span aria-hidden="true">·</span>
          <a href="#" class="footer-link">Kullanım Şartları</a>
        </p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer-heading {
  font-family: var(--font-mono, inherit);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink, #e8e8e8);
  margin-bottom: 0.75rem;
}

.footer-link {
  color: var(--ink-muted, #9aa3a0);
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--accent, #4caf50);
}

/* Sosyal ikonlar için tam oval, glow ve büyüme efekti */
.social-icon {
  border: 1px solid var(--edge, rgba(255,255,255,0.14));
  border-radius: 9999px;
  color: var(--ink-muted, #9aa3a0);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.social-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 0 14px var(--accent-soft, rgba(76,175,80,0.3));
  border-color: var(--accent, #4caf50);
  color: var(--accent, #4caf50);
  background: var(--accent-soft, rgba(76,175,80,0.14));
}
</style>