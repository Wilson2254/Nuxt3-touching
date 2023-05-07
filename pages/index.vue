<template>
  <div>
    <h1 class="text-h1">Интернет-магазин "Хвостики"</h1>
    <CategoriesList :categories="categories" />
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(() =>
  $fetch("https://jsonplaceholder.typicode.com/albums/?userId=1")
);
const categories = data.value;
</script>
