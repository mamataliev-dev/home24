<template>
  <div>
    <h1 class="text-2xl">Product Id</h1>

    <ProductsTopProducts />
  </div>
</template>

<script>
export default {
  name: 'ProductId',
  layout: 'BrandCategoryLayout',
  head() {
    return {
      title: 'Продукт | ID',
    }
  },
}
</script>
