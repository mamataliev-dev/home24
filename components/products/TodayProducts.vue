<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="comp-title-box">
      <h1 class="title-temp">{{ todaysProducts.name }}</h1>
      <nuxt-link to="/category/tv" class="see-all-text">Все товары</nuxt-link>
    </div>

    <div class="flex flex-col gap-y-[56px]">
      <div class="main-grid">
        <ProductsBaseProduct
          v-for="item in todaysProducts.products.slice(0, 12)"
          :key="item.id"
          :product="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todaysProducts() {
      return this.$store.state.showcases.showcases.find(
        (el) => el.slug === 'nabory-dlya-geimerov'
      )
    },
  },
}
</script>
