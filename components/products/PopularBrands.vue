<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="comp-title-box">
      <h1 class="title-temp">Популярные бренды</h1>
      <nuxt-link to="/brand" class="see-all-text">Смотреть все</nuxt-link>
    </div>

    <div class="main-grid">
      <div
        v-for="item in brands?.slice(0, 12)"
        :key="item.id"
        class="brand-grid-item"
        @click="$router.push(`brand/${item.slug}`)"
      >
        <img
          :src="item.md_logo || require('@/assets/img/jpg/empty-brand.jpg')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularBrands',
  computed: {
    brands() {
      return this.$store.state.brands
    },
  },
}
</script>
