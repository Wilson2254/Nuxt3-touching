<template>
  <div class="product">
    <div class="product__header">
      <q-img class="product__img" :src="thumbnail" spinner-color="black" />
      <div class="product__title">
        <h1>{{ title }}</h1>
        <p>Цена: {{ price }}</p>
        <ClientOnly>
          <BuyButton :product="productData" />
        </ClientOnly>
      </div>
    </div>
    <h2>Описание</h2>
    <p>{{ description }}</p>
  </div>
  <h3>С этим товаром также покупают</h3>
  <ProdutcsList :products="alsoBuyProducts.products" />
</template>

<script setup lang="ts">
const route = useRoute();
const currentProduct = route.params.ProductSlug;
let productData = ref({});
let alsoBuyProducts = ref({});

await useAsyncData(async () => {
  try {
    [productData.value, alsoBuyProducts.value] = await Promise.all([
      $fetch(`https://dummyjson.com/products/${currentProduct}`),
      $fetch("https://dummyjson.com/products/category/motorcycle"),
    ]);
  } catch (error) {
    console.warn(error);
  }
});

const { title, price, description, thumbnail, id } = productData.value;

const { changeCrumb } = useBreadcrumbs();
changeCrumb({ title, url: route.path });

useHead(() => ({
  title: title,
}));

if (!productData.value) {
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
