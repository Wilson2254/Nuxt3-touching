<template>
  <main class="q-pa-lg">
    Шапочка
    <slot/>
    Подвальчик
  </main>
</template>


<script setup lang="ts">
const route = useRoute()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: route.path,
    },
  ],
  script: [
    // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
  ],
}))

useSeoMeta({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no',
  title: 'Example Site',
  ogTitle: 'Example Site',
  description: 'Example Site description',
  ogDescription: 'Example Site description',
  ogImage: 'https://placehold.co/600x400',
})
</script>