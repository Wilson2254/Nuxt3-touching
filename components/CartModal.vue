<template>
  <q-dialog v-model="isModalOpen" @hide="modalHide">
    <q-list class="products-list" bordered padding v-if="basketStorage.length">
      <template v-for="(item, index) in basketStorage" :key="index">
        <q-separator spaced />
        <basket-item
          :product="item"
          @remove-from-basket="removeFromBasket($event)"
        />
        <q-separator spaced />
      </template>
      <q-item-section class="items-center text-body1 text-green-6 text-bold">
        Итого: {{ totalSum }} Rub
        <nuxt-link to="/" class="text-blue-6">Оформлениет заказа</nuxt-link>
      </q-item-section>
    </q-list>
    <q-banner v-else inline-actions class="text-white bg-red">
      Товары в корзине отсутвуют.
    </q-banner>
  </q-dialog>
</template>

<script setup lang="ts">
import BasketItem from "~/components/BasketItem.vue";

const { isModalOpen } = useModal();
const { basketStorage, removeFromBasket } = useBasket();

const totalSum = computed(() => {
  return basketStorage.value.reduce(
    (acc, val) => acc + val.price * val.buyCount,
    0
  );
});

function modalHide() {
  localStorage.setItem("testBasket", JSON.stringify(basketStorage.value));
}
</script>

<style scoped>
.products-list {
  position: relative;
  background-color: #fff;
}
</style>
