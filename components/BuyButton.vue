<template>
  <q-btn
    push
    :color="productInBasket ? 'red' : 'green'"
    text-color="white"
    :label="productInBasket ? 'Удалить из корзины' : 'Положить в корзину'"
    @click="basketAction"
  />
  <q-btn
    @click="modalOpen"
    v-if="productInBasket"
    push
    :color="'blue'"
    text-color="white"
    :label="'Корзина'"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const { id } = toRefs(props.product);

const { basketStorage, addToBasket, removeFromBasket } = useBasket();
const { modalOpen } = useModal();

const productInBasket = computed(() => {
  const existingProductIndex = basketStorage.value.findIndex(
    (item) => id.value === item.id
  );
  return existingProductIndex !== -1;
});

function basketAction() {
  if (productInBasket?.value) {
    removeFromBasket(id);
    return;
  }
  addToBasket(props.product);
}
</script>
