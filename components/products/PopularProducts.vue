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
      <nuxt-link v-for="item in 4" :key="item" to="/stocks">
        <img class="w-[390px]" src="@/assets/img/jpg/blog-ad.jpg" alt="" />
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
  methods: {
    getProduct(val) {
      console.log(val)
    },
  },
}
</script>
