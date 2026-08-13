<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

console.log(page.value, route.path)
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-14">
    <NuxtLink to="/blog" class="back-link">← Blog'a dön</NuxtLink>
    <ContentRenderer v-if="page" :value="page" class="prose prose-invert mt-6 max-w-none" />
  </div>
</template>
<style scoped>
.back-link {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--ink-muted);
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--accent);
}
</style>