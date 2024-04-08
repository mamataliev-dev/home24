<template>
  <div class="container mx-auto mt-[32px]">
    <!-- Breadcrumbs -->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">
        <span class="text-orange text-[16px] font-firsNeueRegular"
          >Главная</span
        >
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        :to="{ path: crumb.slug }"
      >
        <span class="text-gray text-[16px] font-firsNeueRegular">
          {{ crumb.name }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!-- Category List -->
    <div>
      <div
        v-for="category in categories"
        :key="category.slug"
        @click="handleCategoryClick(category)"
        class="category-item cursor-pointer"
      >
        {{ category.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayedProducts: [], // This will hold the processed list of products for display
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('YOUR_API_ENDPOINT')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseBody = await response.json()

        // Navigate through the 'products' object, then 'data' array
        const productsData = responseBody.products.data

        this.displayedProducts = productsData
          .map((mainProduct) => {
            // Attempt to find the default product variant using 'default_product_id'
            const defaultVariant = mainProduct.products.find(
              (variant) => variant.id === mainProduct.default_product_id
            )

            // If a default variant is found, return it; otherwise, return the first variant
            // If there are no variants, return undefined (or handle as appropriate)
            return defaultVariant || mainProduct.products[0] || undefined
          })
          .filter((product) => product !== undefined) // Filter out any undefined entries if no variants are found
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    },
  },
  mounted() {
    this.fetchProducts() // Fetch products when the component mounts
  },
}
</script>

<style>
.category-item {
  margin-top: 10px;
}
</style>
