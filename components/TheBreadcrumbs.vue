<template>
  <q-breadcrumbs v-if="crumbs.length > 1" class="text-h4 q-pb-lg" gutter="none">
    <q-breadcrumbs-el
      v-for="{ title, url } in crumbs"
      :label="title"
      :to="url"
      :key="url"
    />
  </q-breadcrumbs>
</template>

<script setup lang="ts">
const { crumbs } = useBreadcrumbs();
</script>
