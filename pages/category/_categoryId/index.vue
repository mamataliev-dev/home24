<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="flex flex-col space-y-[40px] w-2/12 mt-[32px]">
        <div class="category-box">
          <h1 class="category-title">Категории</h1>

          <ul class="flex flex-col space-y-[12px]">
            <li v-for="item in category.children" :key="item.id">
              <button
                class="hover:text-orange"
                @click="
                  $router.push(`/category/${$route.params.id}/${item.slug}`)
                "
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-10/12 pl-[38px]">
        <DynamicRouter />
        <h1 class="main-title">{{ category.name }}</h1>

        <div class="category-id-grid mt-[32px]">
          <div
            v-for="item in category.children"
            :key="item.id"
            class="category-grid-item"
            @click="
              $router.push(`/category/${$route.params.categoryId}/${item.slug}`)
            "
          >
            <img
              class="w-[204px] h-[147px]"
              :src="item.lg_img || require('@/assets/img/jpg/empty-brand.jpg')"
            />
            <span class="font-firsNeueRegular text-[20px] text-center">{{
              item.name
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <ProductsTopProducts />
    <CategoryInfo :desc="category.desc" />
  </div>
</template>

<script>
export default {
  layout: 'BrandCategoryLayout',
  async asyncData({ store, params }) {
    await store.dispatch('fetchCategoryId', params.categoryId)
    await store.dispatch('fetchShowcases')
  },
  data() {
    return {}
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
  },
  mounted() {
    console.log(this.$route.params.categoryId)
  },
  methods: {},
}
</script>
