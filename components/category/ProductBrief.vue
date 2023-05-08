<template>
  <div>
    <q-card class="product" @click="openProductPage">
      <q-img class="image" :src="thumbnail">
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ title }}
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const { id, title, thumbnail } = toRefs(props.product);

const router = useRouter();
const openProductPage = () => {
  router.push(`/product/${id.value}`);
};
</script>

<style scoped>
.product {
  cursor: pointer;
  box-shadow: none;
  transition: 0.2s linear;
}

.product:hover {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.image {
  aspect-ratio: 1;
}
</style>
