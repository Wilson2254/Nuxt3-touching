<template>
  <div class="categories-container">
    <q-card class="col" v-for="{id, title, img} in categoriesWithPhoto" :key="id">
      <img class="image" :src="img">

      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const categoriesWithPhoto = computed(() => {
  return props.categories.map(item => {
    const backGroundColor = getColor();
    const textColor = getColor();
    item.img = `https://placehold.co/600x400/${backGroundColor}/${textColor}/?text=${item.title}`
    return item
  })
})

const getColor = () =>
    [...Array(3)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

</script>

<style scoped>
.categories-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px
}

.image {
  aspect-ratio: 3/2;
}
</style>