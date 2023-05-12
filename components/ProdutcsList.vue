<template>
  <div class="products-list">
    <div v-for="item in products" :key="item.id">
      <q-card>
        <q-img class="image" :src="item.thumbnail">
          <div class="text-h5 absolute-bottom text-right">
            <nuxt-link class="title" :to="`/product/${item.id}`">
              {{ item.title }}
            </nuxt-link>
          </div>
        </q-img>
      </q-card>
      <ClientOnly>
        <BuyButton :product="item" />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
}

.image {
  aspect-ratio: 1;
}

.title {
  color: #fff;
  text-decoration: none;
}
</style>
