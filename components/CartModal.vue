<template>
  <q-dialog v-model="isModalOpen">
    <q-list class="products-list" bordered padding v-if="basketStorage.length">
      <template
        v-for="{
          id,
          thumbnail,
          title,
          description,
          discountPercentage,
          price,
        } in basketStorage"
        :key="id"
      >
        <q-separator spaced />
        <q-item>
          <q-item-section top avatar class="items-center">
            <q-avatar size="xl">
              <img :src="thumbnail" />
            </q-avatar>
            <q-badge
              class="q-mt-sm"
              :label="`${discountPercentage} %`"
              color="orange"
              text-color="black"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <nuxt-link :to="`/product/${id}`">{{ title }}</nuxt-link>
            </q-item-label>
            <q-item-label caption>{{ description }}</q-item-label>
            <q-item-label>{{ price }} Rub</q-item-label>
          </q-item-section>

          <q-item-section side center>
            <q-btn
              push
              color="red"
              text-color="white"
              label="Удалить"
              @click="removeFromBasket(id)"
            />
            <q-input type="number" class="input-count" filled label="Кол-во" />
          </q-item-section>
        </q-item>
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
const { isModalOpen } = useModal();
const { basketStorage, removeFromBasket } = useBasket();

const totalSum = computed(() => {
  return basketStorage.value.reduce((acc, val) => acc + val.price, 0);
});
</script>

<style scoped>
.products-list {
  position: relative;
  background-color: #fff;
}

.input-count {
  width: 100px;
}
</style>
