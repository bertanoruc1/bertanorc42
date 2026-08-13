<template>
  <div>
    <div id="content" class="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center text-center md:text-left pt-12 pb-16 md:pt-24 md:pb-24 gap-10 md:gap-6">

      <!-- Yazılar (TypeWriter ile) -->
      <div class="flex-1 order-1">
        <p class="eyebrow mb-3">merhaba, ben</p>
        <p class="text-2xl sm:text-3xl font-semibold mb-2 font-display">
          <TypeWriter :text="'Bertan'" :speed="60" @finished="showTitle = true"/>
        </p>

        <h1 v-if="showTitle" class="hero-title font-display font-bold leading-[1.05] mt-2">
          <TypeWriter text="Bilgisayar Programcısı" :speed="160" />
        </h1>

        <p class="mt-6 text-[var(--ink-muted)] max-w-md mx-auto md:mx-0">
          Vue.js, React ve C# ile web uygulamaları geliştiriyorum.
        </p>

        <div class="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
          <NuxtLink to="/contact" class="btn-primary">Benimle iletişime geç</NuxtLink>
          <NuxtLink to="/about" class="btn-outline">Hakkımda</NuxtLink>
        </div>
      </div>

      <!-- Fotoğraf -->
      <div class="flex-shrink-0 order-2 flex justify-center">
        <img
          src="/images/IMG_0523.jpeg"
          alt="Bertan Örüç"
          class="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover object-top transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--accent)]/50 border-2 border-[var(--edge)]"
        />
      </div>

    </div>

    <!-- Hakkımda ve Yeteneklerim -->
    <div id="about" class="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
      <p class="eyebrow mb-2">01 · hakkımda</p>
      <h2 class="text-3xl md:text-4xl font-display font-bold border-b-4 border-[var(--accent)] inline-block pb-2 mb-6">
        Kısaca ben
      </h2>
      <p class="max-w-3xl leading-relaxed text-base md:text-lg text-[var(--ink-muted)] space-y-4">
        Merhaba, ben <strong class="text-[var(--ink)]">Bertan Örüç</strong>. 22 yaşındayım ve bilgisayar programcılığı alanında eğitim aldım. Yazılım geliştirme tutkusu ile kod dünyasında kendime sağlam bir yol çiziyorum. Teknolojiye olan ilgim ve öğrenme isteğim, beni sürekli olarak yeni beceriler kazanmaya ve farklı projelerde kendimi sınamaya yönlendiriyor. Web uygulamaları, interaktif projeler ve eğitim içerikleri hazırlayarak, hem kendi yeteneklerimi geliştiriyor hem de başkalarına değer katmayı hedefliyorum.
        <br><br>
        Programlama benim için yalnızca bir iş değil, aynı zamanda bir tutku; her satır kodda yeni bir çözüm, her proje ile yeni bir öğrenme fırsatı buluyorum. Kullanıcı deneyimini ön planda tutarak, estetik ve fonksiyonel yazılımlar geliştirmeye özen gösteriyorum. Vue.js, React, C#, JavaScript ve diğer teknolojilerle geliştirdiğim projelerde, yaratıcı ve yenilikçi yaklaşımlarla sorunlara çözüm üretiyorum.
        <br><br>
        Eğitim sürecim boyunca kazandığım teorik bilgileri, gerçek dünya projeleri ile birleştirerek, yazılım geliştirme alanında hem teknik hem de analitik becerilerimi sürekli olarak güçlendiriyorum. Youtube ve diğer platformlarda hazırladığım içeriklerle, yazılım dünyasına ilgi duyan gençlere ilham vermeyi ve bilgi paylaşımını önemsiyorum.
        <br><br>
        Amacım, teknoloji ve yazılım dünyasında kalıcı bir iz bırakmak, kullanıcıların hayatını kolaylaştıran ve değer katan çözümler üretmek. Her yeni proje benim için bir fırsat, her zorluk ise gelişim ve deneyim demek. Yazılım dünyasında hem öğrenmeye hem de öğretmeye devam ederek, geleceğin teknolojilerine katkıda bulunmayı hedefliyorum.
      </p>

      <div class="mt-14 md:mt-16">
        <p class="eyebrow mb-2">02 · yeteneklerim</p>
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-8">Neyle çalışıyorum</h2>

        <div class="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          <div v-for="skill in skills" :key="skill.name" class="space-y-2">
            <div class="flex justify-between items-baseline">
              <span class="font-medium">{{ skill.name }}</span>
              <span class="font-mono text-xs text-[var(--accent)]">{{ skill.percent }}</span>
            </div>
            <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full skill-fill"
                :style="{ '--w': skill.percent }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showTitle = ref(true);

const skills = [
  { name: 'HTML', percent: '100%' },
  { name: 'CSS', percent: '80%' },
  { name: 'JavaScript', percent: '50%' },
  { name: 'C', percent: '60%' },
  { name: 'C++', percent: '70%' },
  { name: 'C#', percent: '80%' },
  { name: 'Vue.js', percent: '40%' },
  { name: 'React.js', percent: '40%' },
  { name: 'SQL', percent: '60%' },
  { name: 'Bootstrap', percent: '70%' },
]
</script>

<style scoped>
.hero-title {
  font-size: clamp(2.25rem, 8vw, 5.5rem);
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  color: var(--accent);
}

.btn-primary {
  background: var(--accent);
  color: #06110a;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--accent-soft);
}

.btn-outline {
  border: 1px solid var(--edge);
  color: var(--ink);
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* Yetenek barları animasyonu */
@keyframes fillBar {
  0% { width: 0; }
  100% { width: var(--w); }
}

.skill-fill {
  width: var(--w);
  background: linear-gradient(90deg, var(--accent), #7fd68a);
  animation: fillBar 1.2s ease forwards;
}
</style>