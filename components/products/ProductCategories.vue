<template>
  <div class="container mx-auto conponent-margin-top">
    <h1 class="title">Категории</h1>

    <div class="main-grid">
      <div
        v-for="item in categories?.slice(0, 12)"
        :key="item.id"
        class="category-grid-item"
        @click="$router.push(`/category/${item.slug}`)"
      >
        <img
          class="w-[204px] h-[147px]"
          :src="item.md_img || require('@/assets/img/jpg/empty-brand.jpg')"
        />
        <span class="font-firsNeueRegular text-[20px] text-center">{{
          item.name
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCategories',
  computed: {
    categories() {
      return this.$store.state.categories
    },
  },
}
</script>

<style>
.grid-category {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-template-rows: repeat(auto-fill, minmax(481px, 1fr)); */
  gap: 16px;
}

/* @media (max-width: 1400px) {
  .grid-category {
    grid-template-columns: repeat(auto-fill, minmax(252px, 1fr)) !important;
    column-gap: 10px;
  }
} */
</style>
