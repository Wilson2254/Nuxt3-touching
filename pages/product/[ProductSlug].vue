<template>
  <div class="product">
    <div class="product__header">
      <q-img class="product__img" :src="thumbnail" spinner-color="black" />
      <div class="product__title">
        <h1>{{ title }}</h1>
        <p>Цена: {{ price }}</p>
        <ClientOnly>
          <BuyButton :id="id" :title="title" />
        </ClientOnly>
      </div>
    </div>
    <h2>Описание</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const currentProduct = route.params.ProductSlug;
const { data } = await useAsyncData(() =>
  $fetch(`https://dummyjson.com/products/${currentProduct}`)
);

const { title, price, description, thumbnail, id } = data.value;

const { changeCrumb } = useBreadcrumbs();
changeCrumb({ title, url: route.path });

useHead(() => ({
  title: title,
}));

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
</script>

<style scoped>
.product__header {
  display: flex;
}

.product__img {
  width: 400px;
  height: auto;
  margin-right: 32px;
}
</style>
