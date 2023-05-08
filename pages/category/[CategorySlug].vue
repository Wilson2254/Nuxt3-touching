<template>
  <div>
    <h1>Категория {{ currentCategory }}</h1>
    <div class="product-container">
      <product-brief
        class="col-2"
        v-for="item in products"
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
  $fetch(`https://dummyjson.com/products/category/${currentCategory}`)
);

const { total, products } = data.value;

useHead(() => ({
  title: `Категория-${currentCategory}`,
}));

if (!total) {
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
