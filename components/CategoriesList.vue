<template>
  <h2 class="text-h2">Список категорий</h2>
  <div class="categories-container">
    <q-card
      class="col cursor-pointer card"
      v-for="{ id, title, img } in categoriesWithPhoto"
      :key="id"
      @click="openCategoryPage(id)"
    >
      <q-img class="image" :src="img">
        <div class="text-subtitle2 absolute-top text-center">
          <nuxt-link class="title" :to="`/category/${id}`">
            Категория - {{ id }}
          </nuxt-link>
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const categoriesWithPhoto = computed(() => {
  return props.categories.map((item) => {
    const backGroundColor = getColor();
    const textColor = getColor();
    item.img = `https://placehold.co/600x400/${backGroundColor}/${textColor}/?text=${item.title}`;
    return item;
  });
});

const getColor = () =>
  [...Array(3)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");

const openCategoryPage = (id) => {
  router.push(`/category/${id}`);
};
</script>

<style scoped>
.categories-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.image {
  aspect-ratio: 3/2;
}

.card {
  box-shadow: none;
  transition: 0.2s linear;
}

.card:hover {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.title {
  color: #fff;
  text-decoration: none;
}
</style>
