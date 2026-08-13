<script setup lang="ts">
// ~/constants/nav dosyasından veri alınıyor
import { navs, socialLinks } from '~/constants/nav';

// DÜZELTME: Bu arayüzün yapısı, nav.ts'deki socialLinks yapısıyla eşleşmelidir.
// TypeScript'in hata mesajında belirttiği 'ExternalLink' ismini kullanıyoruz.
interface ExternalLink {
  label: string; // nav.ts'den gelen 'label'
  to: string;    // nav.ts'den gelen 'to' (link)
  icon: string;  // nav.ts'den gelen 'icon' (UnoCSS sınıfı)
}

// Veriyi tanımlanan tipe dönüştürerek (type casting) TypeScript hatası çözülür.
const typedSocialLinks = socialLinks as unknown as ExternalLink[];

const route = useRoute();
const menuOpen = ref(false);

// Sayfa değiştiğinde mobil menüyü otomatik kapat
watch(() => route.path, () => { menuOpen.value = false });
</script>

<template>
  <header class="site-header">
    <div class="container mx-auto flex items-center justify-between px-4 md:px-6 py-3">
      <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
        <img src="/logo.png" alt="logo" class="w-9 h-9 md:w-10 md:h-10 rounded" />
        <span class="font-display font-semibold text-base md:text-lg tracking-tight">
          Bertan Örüç
        </span>
      </NuxtLink>

      <!-- Masaüstü navigasyon -->
      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="nav in navs"
          :key="nav.to"
          :to="nav.to"
          class="nav-link"
          active-class="nav-link-active"
        >
          {{ nav.label }}
        </NuxtLink>
      </nav>

      <div class="hidden md:flex items-center gap-3">
        <a
          v-for="social in typedSocialLinks"
          :key="social.to"
          :href="social.to"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="text-current opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors"
        >
          <span :class="social.icon" class="w-5 h-5 block"></span>
        </a>
      </div>

      <!-- Mobil menü butonu -->
      <button
        type="button"
        class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10"
        :aria-expanded="menuOpen"
        aria-label="Menüyü aç/kapat"
        @click="menuOpen = !menuOpen"
      >
        <span :class="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="w-5 h-5"></span>
      </button>
    </div>

    <!-- Mobil açılır menü -->
    <transition name="mobile-menu">
      <nav v-if="menuOpen" class="md:hidden mobile-menu">
        <NuxtLink
          v-for="nav in navs"
          :key="nav.to"
          :to="nav.to"
          class="mobile-nav-link"
          active-class="nav-link-active"
        >
          {{ nav.label }}
        </NuxtLink>

        <div class="flex items-center gap-5 pt-4 mt-2 border-t border-white/10">
          <a
            v-for="social in typedSocialLinks"
            :key="social.to"
            :href="social.to"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-colors"
          >
            <span :class="social.icon" class="w-6 h-6 block"></span>
          </a>
        </div>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(12, 15, 16, 0.75);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--edge, rgba(255,255,255,0.08));
}

.font-display {
  font-family: var(--font-display, inherit);
}

.nav-link {
  font-family: var(--font-mono, inherit);
  font-size: 0.85rem;
  padding: 0.5rem 0.85rem;
  border-radius: 0.5rem;
  color: var(--ink-muted, #9aa3a0);
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover {
  color: var(--ink, #e8e8e8);
  background: rgba(255, 255, 255, 0.05);
}

.nav-link-active {
  color: var(--accent, #4caf50);
  background: var(--accent-soft, rgba(76,175,80,0.14));
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem 1.25rem 1.5rem;
  border-bottom: 1px solid var(--edge, rgba(255,255,255,0.08));
}

.mobile-nav-link {
  font-family: var(--font-mono, inherit);
  font-size: 0.95rem;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  color: var(--ink-muted, #9aa3a0);
}

.mobile-nav-link:active {
  background: rgba(255, 255, 255, 0.05);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>