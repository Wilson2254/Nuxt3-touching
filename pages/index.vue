<template>
  <div>
    <h1 class="text-h1 q-my-none">Интернет-магазин "Хвостики"</h1>
    <CategoriesList :categories="categories" />
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(() =>
  $fetch("https://dummyjson.com/products/categories")
);
const categories = data.value;

const { changeCrumb } = useBreadcrumbs();
changeCrumb({ title: "Главная", url: "/" });
</script>
