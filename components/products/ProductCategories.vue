<template>
  <div class="container mx-auto conponent-margin-top">
    <h1 class="title">Категории</h1>

    <div class="main-grid">
      <div
        v-for="item in categories"
        :key="item.id"
        class="category-grid-item"
        @click="$router.push(`/category/${item.name}`)"
      >
        <img
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
  mounted() {
    this.fetchBrands()
  },
  methods: {
    fetchBrands() {
      this.$store.dispatch('fetchCategories')
    },
  },
}
</script>
