<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="flex flex-col space-y-[40px] w-2/12 mt-[32px]">
        <!-- Categories -->
        <div class="category-box">
          <h1 class="category-title">Категории</h1>

          <ul class="flex flex-col space-y-[12px]">
            <TreeNode
              :node="category.children"
              @fetch-category-id="fetchCategoryId"
            />
          </ul>
        </div>

        <!-- Attribute -->
        <div class="flex flex-col space-y-[40px]">
          <div
            v-for="item in attributes"
            :key="item.id"
            class="flex flex-col space-y-[12px]"
          >
            <h1 class="category-title">{{ item.name }}</h1>

            <!-- Atrribtes -->
            <div v-for="elem in item.options" :key="elem.id">
              <div v-if="item.name !== 'Цвет'" class="flex space-x-[15px]">
                <input type="radio" :name="elem.name" />
                <label>{{ elem.name }}</label>
              </div>
            </div>
          </div>

          <!-- Colors -->
          <div class="felx flex-col space-y-[16px]">
            <div class="flex justify-between items-center mb-16px">
              <h1 class="category-title">{{ item.name }}</h1>

              <button
                v-if="filterColor !== ''"
                class="text-[14px] text-gray leading-[24px] border-b border-gray"
                @click="clearFilterColor"
              >
                очистить
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-10/12 pl-[38px]">
        <DynamicRouter />
        <div class="flex justify-between items-center">
          <h1 class="main-title">{{ category.name }}</h1>

          <SortComp
            @sort-category="sortCategory"
            @update-grid-layout="updateGrid"
          />
        </div>

        <div
          :class="isGridCol ? 'grid-container-row' : 'grid-container'"
          class="mt-[32px]"
        >
          <div v-for="item in products" :key="item.id">
            <ProductsBaseProduct
              :is-grid-col="isGridCol"
              :product="item.products[0]"
            />
          </div>
        </div>

        <CategoryInfo :desc="category.desc" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'BrandCategoryLayout',
  async asyncData({ store, params }) {
    await store.dispatch('fetchCategoryId', params.subCategoryId)
  },
  data() {
    return {
      isGridCol: false,
      filterColor: '',
    }
  },
  computed: {
    categoryData() {
      return this.$store.state.categoryId
    },
    category() {
      return this.categoryData.category
    },
    attributes() {
      return this.categoryData.attributes
    },
    product_max_price() {
      return this.categoryData.product_max_price
    },
    product_min_price() {
      return this.categoryData.product_min_price
    },
    products() {
      return this.categoryData.products.data
    },
  },
  methods: {
    updateGrid(val) {
      this.isGridCol = val
      console.log(val)
    },
    sortCategory(val) {},
    fetchCategoryId(id) {
      this.$router.push(`/category${this.$route.params.categoryId}/${id}`)
    },
    chosenColor(color) {
      this.filterColor = color
    },
    clearFilterColor() {
      this.filterColor = ''
    },
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, auto);
  column-gap: 24px;
  row-gap: 42px;
}

@media (max-width: 1400px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

.grid-container-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  column-gap: 24px;
  row-gap: 42px;
}
</style>
