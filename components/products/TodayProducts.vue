<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="comp-title-box">
      <h1 class="title-temp">Телевизоры</h1>
      <nuxt-link to="/category/tv" class="see-all-text">Все товары</nuxt-link>
    </div>

    <div class="flex flex-col gap-y-[56px]">
      <div class="main-grid">
        <ProductsBaseProduct
          v-for="item in 6"
          :key="item"
          @click="getProduct(item)"
        />
      </div>

      <div class="main-grid">
        <ProductsBaseProduct
          v-for="item in 6"
          :key="item"
          @click="getProduct(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
