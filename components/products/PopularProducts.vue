<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="comp-title-box">
      <h1 class="title-temp">Популярные товары</h1>
      <nuxt-link to="/" class="see-all-text">Все товары</nuxt-link>
    </div>

    <div class="main-grid">
      <ProductsBaseProduct
        v-for="item in popularProducts?.slice(0, 6)"
        :key="item.id"
        :product="item"
      />
    </div>

    <div class="flex gap-x-[24px] my-[56px]">
      <nuxt-link v-for="item in banners" :key="item.id" to="/stocks">
        <img
          class="w-[390px]"
          :src="item.lg_m_img || require('@/assets/img/jpg/empty-brand.jpg')"
          alt=""
        />
      </nuxt-link>
    </div>

    <div class="main-grid">
      <ProductsBaseProduct
        v-for="item in popularProducts.slice(6, 12)"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCategories',
  computed: {
    popularProducts() {
      return this.$store.state.productsSort
    },
    banners() {
      return this.$store.state.banners.filter((b) => b.type === 'bottom')
    },
  },
  mounted() {
    this.fetchPopularProducts()
    this.fetchBanners()
  },
  methods: {
    fetchPopularProducts() {
      this.$store.dispatch('fetchProductsSort', 'type=popular')
    },
    fetchBanners() {
      this.$store.dispatch('fetchBanners')
    },
  },
}
</script>
