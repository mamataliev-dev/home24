<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="flex items-end space-x-[24px] mb-[24px]">
      <h1 class="title-temp">Просмотренные товары</h1>
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
export default {}
</script>
