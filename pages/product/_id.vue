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
  data() {
    return {
      product: [],
    }
  },
  head() {
    return {
      title: 'Продукт | ID',
    }
  },
  methods: {
    // Get Products
    async fetchProducts() {
      try {
        const response = await this.$axiosURL.get(`/products`)
        this.product = response.data.products.data
      } catch (error) {
        console.error('Error fetching:', error)
      }
    },
  },
}
</script>
