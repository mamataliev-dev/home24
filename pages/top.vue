<template>
  <div class="container mx-auto">
    <h1 class="main-title">Хиты прожад</h1>

    <div class="flex mt-[32px]">
      <div class="flex flex-col w-2/12">
        <div class="category-box">
          <!-- Categories -->
          <ReusedTreeNode
            v-for="item in showcase.categories"
            :key="item.id"
            :node="item"
            @fetchCategory="fetchCategory"
          />
        </div>

        <div class="category-box mt-[40px]">
          <h1 class="category-title">Цена</h1>

          <div class="flex flex-col">
            <div class="block">
              <el-slider v-model="price"></el-slider>
            </div>

            <div
              class="flex justify-between xl:space-x-[14px] 2xl:space-x-[24px]"
            >
              <input
                class="xl:w-[100px] 2xl:w-[114px] bg-[#F9F9F9] border border-[#D9D9D9] rounded-lg text-black py-[10px] px-[8px]"
                type="number"
                placeholder="10 000"
              />
              <input
                class="xl:w-[100px] 2xl:w-[114px] bg-[#F9F9F9] border border-[#D9D9D9] rounded-lg text-black py-[10px] px-[8px]"
                type="number"
                placeholder="1 000 000"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="w-10/12 pl-[38px]">
        <div class="flex items-center justify-end">
          <div class="flex xl:space-x-[40px] 2xl:space-x-[60px]">
            <div class="flex items-center space-x-[16px]">
              <span class="text-gray text-[14px]">Сортировка</span>

              <el-select v-model="sortBy" placeholder="Подешевле">
                <el-option
                  v-for="item in sorts"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>

            <div class="flex space-x-[18px]">
              <button @click="isGridCol = true">
                <ImgGridColums :is-active="isGridCol" />
              </button>

              <button @click="isGridCol = false">
                <ImgGridRows :is-active="!isGridCol" />
              </button>
            </div>
          </div>
        </div>

        <div class="mt-[32px]">
          <div :class="isGridCol ? 'category-grid' : 'category-grid-row'">
            <ProductsBaseProduct
              v-for="item in showcase.showcase.products"
              :key="item.id"
              :product="item"
              @click="$router.push(`/product/${item.products[0]?.slug}`)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('fetchCurrentShowcase', 'bestsellery')
  },
  data() {
    return {
      price: 0,
      sortCategory: '',
      sortBy: '',
      isGridCol: true,
      sorts: [
        { value: 'cheap', label: 'Подешевле' },
        { value: 'popular', label: 'Популярные' },
        { value: 'expensive', label: 'Подороже' },
        { value: 'rating', label: 'Высокий рейтинг' },
        { value: 'orders', label: 'Много заказов' },
        { value: 'recently', label: 'Добавлены недавно' },
      ],
    }
  },
  head() {
    return {
      title: 'Хиты продаж',
    }
  },
  computed: {
    showcase() {
      return this.$store.state.currentShowcase
    },
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
  },
}
</script>
