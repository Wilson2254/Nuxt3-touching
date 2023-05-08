<template>
  <q-btn
    push
    :color="productInBasket ? 'red' : 'green'"
    text-color="white"
    :label="productInBasket ? 'Удалить из корзины' : 'Положить в корзину'"
    @click="basketAction"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const { id, title } = toRefs(props);

const { basketStorage, addToBasket, removeFromBasket } = useBasket();

const productInBasket = computed(() => {
  const existingProductIndex = basketStorage.value.findIndex(
    (item) => props.id === item.id
  );
  return existingProductIndex !== -1;
});

function basketAction() {
  if (productInBasket?.value) {
    removeFromBasket(id);
    return;
  }
  addToBasket({ title, id });
}
</script>

<style scoped></style>
