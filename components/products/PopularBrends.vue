<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="comp-title-box">
      <h1 class="title-temp">Популярные бренды</h1>
      <nuxt-link to="/" class="see-all-text">Смотреть все</nuxt-link>
    </div>

    <div class="main-grid">
      <div
        v-for="item in 12"
        :key="item"
        class="brand-grid-item"
        @click="getBrand(item)"
      >
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularBrends',
  methods: {
    getBrand(val) {
      this.$router.push(`/brand/${val}`)
    },
  },
}
</script>
