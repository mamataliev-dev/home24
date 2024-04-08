<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="comp-title-box">
      <h1 class="title-temp">Хиты продаж</h1>
      <nuxt-link :to="`/showcases/${topProducts?.slug}`" class="see-all-text"
        >Все товары</nuxt-link
      >
    </div>

    <div class="main-grid">
      <ProductsBaseProduct
        v-for="item in topProducts?.products.slice(0, 6)"
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
    topProducts() {
      return this.$store.state.showcases.showcases?.find(
        (el) => el.slug === 'bestsellery'
      )
    },
  },
}
</script>
