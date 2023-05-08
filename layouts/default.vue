<template>
  <q-layout class="layout" view="lHh lpr lFf">
    <q-header
      bordered
      reveal
      class="bg-grey-3 text-h4 text-black text-center q-py-sm"
    >
      Хвостики
    </q-header>
    <slot />
    <q-footer
      class="bg-grey-3 text-h4 text-black text-center q-py-sm"
      reveal
      bordered
    >
      Мы в соцсетях
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
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
