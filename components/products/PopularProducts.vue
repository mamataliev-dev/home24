<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="comp-title-box">
      <h1 class="title-temp">Популярные товары</h1>
      <nuxt-link to="/" class="see-all-text">Все товары</nuxt-link>
    </div>

    <div class="main-grid">
      <ProductsBaseProduct
        v-for="item in 6"
        :key="item"
        @click="getProduct(item)"
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
        v-for="item in 6"
        :key="item"
        @click="getProduct(item)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCategories',
  computed: {
    banners() {
      return this.$store.state.banners.filter((b) => b.type === 'bottom')
    },
  },
  mounted() {
    this.fetchBanners()
  },
  methods: {
    getProduct(val) {
      console.log(val)
    },
    fetchBanners() {
      this.$store.dispatch('fetchBanners')
    },
  },
}
</script>
