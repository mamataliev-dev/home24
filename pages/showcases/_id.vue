<template>
  <div class="container mx-auto">
    <h1 class="main-title">{{ showcase.showcase.name }}</h1>

    <div class="flex mt-[32px]">
      <div class="flex flex-col w-2/12">
        <div class="category-box">
          <!-- Categories -->
          <TreeNode
            :node="showcase.categories"
            @fetchCategoryId="fetchCategoryId"
          />
        </div>

        <div class="category-box mt-[40px]">
          <PriceSlider @sortByPrice="sortByPrice" />
        </div>
      </div>

      <div class="w-10/12 pl-[24px]">
        <div class="flex items-center justify-end">
          <SortComp @update-grid-layout="updateGridLayout" />
        </div>

        <div class="mt-[32px]">
          <div :class="isGridCol ? 'category-grid' : 'category-grid-row'">
            <ProductsBaseProduct
              v-for="item in showcase.showcase.products"
              :key="item.id"
              :product="item"
              @click="$router.push(`/product/${item.products[0]?.slug}`)"
            />
          </div>
        </div>

        <PaginationComp class="mt-[10px]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('fetchCurrentShowcase', params.id)
  },
  data() {
    return {
      price: 0,
      sortCategory: '',
      sortBy: '',
      isGridCol: true,
      sorts: [
        { value: 'cheap', label: 'Подешевле' },
        { value: 'popular', label: 'Популярные' },
        { value: 'expensive', label: 'Подороже' },
        { value: 'rating', label: 'Высокий рейтинг' },
        { value: 'orders', label: 'Много заказов' },
        { value: 'recently', label: 'Добавлены недавно' },
      ],
    }
  },
  head() {
    return {
      title: this.showcase.showcase.name,
    }
  },
  computed: {
    showcase() {
      return this.$store.state.currentShowcase
    },
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    async fetchCategoryId(id) {
      try {
        const response = await this.$axiosURL.get(
          `/showcases/${this.showcase.showcase.slug}/?category=${id}`
        )
        this.$store.commit('setShowcases', response.data)
        this.$router.push(
          `/showcases/${this.showcase.showcase.slug}/?category=${id}`
        )
      } catch (error) {
        console.error('Error fetching:', error)
      }
    },
    handlePriceInput(prices) {
      console.log('Selected Prices:', prices)
    },
    updateGridLayout(val) {
      this.isGridCol = val
    },
  },
}
</script>
