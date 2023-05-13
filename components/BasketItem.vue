<template>
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
      <q-item-label>
        {{ price }} Rub | x {{ buyCount }} - {{ totalAmountSum }} Rub
      </q-item-label>
    </q-item-section>

    <q-item-section side center>
      <q-btn
        push
        color="red"
        text-color="white"
        label="Удалить"
        @click="removeFromBasket"
      />
      <q-input
        type="number"
        class="input-count"
        filled
        label="Кол-во"
        :model-value="buyCount"
        @update:model-value="changeBuyCount"
      />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      id: 0,
      thumbnail: "",
      discountPercentage: 0,
      title: "",
      description: "",
      price: 0,
      buyCount: 1,
      stock: 1,
    }),
  },
});

const {
  id,
  thumbnail,
  discountPercentage,
  title,
  description,
  price,
  buyCount,
  stock,
} = toRefs(props.product);

const emit = defineEmits(["remove-from-basket"]);

function removeFromBasket() {
  emit("remove-from-basket", id);
}

function changeBuyCount(event) {
  if (event > stock.value || event < 1) {
    return;
  }
  buyCount.value = event;
}

const totalAmountSum = computed(() => {
  return buyCount.value * price.value;
});
</script>

<style scoped></style>
