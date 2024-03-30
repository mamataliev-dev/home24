<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="flex items-end space-x-[24px] mb-[24px]">
      <h1 class="title-temp">Просмотренные товары</h1>
    </div>

    <div class="main-grid">
      <ProductsBaseProduct
        v-for="item in recentlyProducts?.slice(0, 6)"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recentlyProducts() {
      return this.$store.state.productsSort
    },
  },
  mounted() {
    this.fetchPopularProducts()
  },
  methods: {
    fetchPopularProducts() {
      this.$store.dispatch('fetchProductsSort', 'sort=popular')
    },
  },
}
</script>
