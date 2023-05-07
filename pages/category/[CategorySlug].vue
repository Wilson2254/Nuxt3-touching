<template>
  <div>
    <h1>Категория {{ currentCategory }}</h1>
    <div class="product-container">
      <product-brief
        class="col-2"
        v-for="item in data"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const currentCategory = route.params.CategorySlug;
const { data } = await useAsyncData(() =>
  $fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${currentCategory}`
  )
);

useHead(() => ({
  title: `Категория-${currentCategory}`,
}));

if (!data.value.length) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
}
</style>
