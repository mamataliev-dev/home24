<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="flex items-end space-x-[24px] mb-[24px]">
      <h1 class="title-temp">Популярные товары</h1>
      <nuxt-link to="/" class="text-orange text-[20px] underline"
        >Все товары</nuxt-link
      >
    </div>

    <div class="main-grid">
      <ProductsBaseProduct
        v-for="item in 10"
        :key="item"
        @click="getProduct(val)"
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
