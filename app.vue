<template>
  <div>
    <div class="bg-scene" aria-hidden="true">
      <div class="bg-grid"></div>
      <div class="blob blob-a"></div>
      <div class="blob blob-b"></div>
      <div class="blob blob-c"></div>
      <div class="bg-noise"></div>
      <div class="bg-vignette"></div>
    </div>

    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Hatalı satır kaldırıldı:
//  import contentConfig from '~/content.config.ts'; 
// Bu yapılandırma dosyası, Nuxt Content Modülü tarafından 
// otomatik olarak işlenmelidir, ana bileşende doğrudan içe aktarılmaz.

// Başka bir script içeriği eklenmediği sürece burası boş kalabilir.
</script>

<style>
/* Temel sayfa ayarları */
#__nuxt,
html,
body {
  background: var(--bg-void);
  color: var(--ink);
  min-height: 100vh;
  font-family: var(--font-body);
}

/* Sabit, katmanlı arka plan sahnesi: yumuşak yüzen gradyan lekeler +
   ince tanecik (grain) dokusu + hafif silik grid + kenar vinyeti.
   Hepsi position:fixed olduğu için sayfa kaydırılırken sabit kalır
   ve performans için tek bir kompozit katman oluşturur. */
.bg-scene {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(160deg, var(--bg-void) 0%, var(--bg-deep) 100%);
}

.bg-grid {
  position: absolute;
  inset: -1px;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 44px 44px;
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%);
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.55;
  will-change: transform;
}

.blob-a {
  width: 46vw;
  height: 46vw;
  max-width: 620px;
  max-height: 620px;
  top: -12%;
  left: -8%;
  background: radial-gradient(circle at 30% 30%, rgba(76,175,80,0.35), transparent 70%);
  animation: drift-a 26s ease-in-out infinite alternate;
}

.blob-b {
  width: 38vw;
  height: 38vw;
  max-width: 520px;
  max-height: 520px;
  bottom: -14%;
  right: -6%;
  background: radial-gradient(circle at 60% 60%, rgba(0,200,255,0.18), transparent 70%);
  animation: drift-b 32s ease-in-out infinite alternate;
}

.blob-c {
  width: 26vw;
  height: 26vw;
  max-width: 360px;
  max-height: 360px;
  top: 38%;
  left: 60%;
  background: radial-gradient(circle at 50% 50%, rgba(76,175,80,0.14), transparent 70%);
  animation: drift-c 22s ease-in-out infinite alternate;
}

@keyframes drift-a {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(4%, 6%) scale(1.08); }
}

@keyframes drift-b {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-5%, -4%) scale(1.06); }
}

@keyframes drift-c {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-6%, 5%) scale(1.1); }
}

/* İnce tanecik dokusu: düz gradyanların "basılı çıktı" gibi görünmesini
   engelleyip yüzeye gerçekçi, hafif dokulu bir his katar (film grain). */
.bg-noise {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
  background-size: 160px 160px;
}

.bg-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 90% 80% at 50% 20%, transparent 55%, rgba(0,0,0,0.35) 100%);
}

@media (prefers-reduced-motion: reduce) {
  .blob {
    animation: none;
  }
}
</style>