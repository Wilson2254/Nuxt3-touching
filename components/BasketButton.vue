<template>
  <q-btn
    @click="modalOpen"
    push
    :color="'blue'"
    text-color="white"
    :label="'Корзина'"
  />
</template>

<script setup lang="ts">
const { modalOpen } = useModal();
</script>
