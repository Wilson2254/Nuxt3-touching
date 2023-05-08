<template>
  <q-layout class="layout" view="lHh lpr lFf">
    <the-header />
    <the-breadcrumbs />
    <slot />
    <the-footer />
  </q-layout>
</template>

<script setup lang="ts">
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
const route = useRoute();

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: route.path,
    },
  ],
  script: [
    // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
  ],
}));

useSeoMeta({
  charset: "utf-8",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no",
  title: "Example Site",
  ogTitle: "Example Site",
  description: "Example Site description",
  ogDescription: "Example Site description",
  ogImage: "https://placehold.co/600x400",
});
</script>

<style scoped>
.layout {
  max-width: 90%;
  position: static;
  margin: 0 auto;
  padding: 100px 20px;
}
</style>
