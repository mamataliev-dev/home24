<template>
  <!-- TODO: Improve logic for switch by products array in: all, category, sort-->
  <!-- TODO: Improve logic to filter and search barnds by back-end -->
  <div class="container mx-auto">
    <div class="flex">
      <div class="flex flex-col w-2/12 mt-[32px]">
        <div class="xl:mb-[20px] 2xl:mb-[40px]">
          <img
            class="border border-[#EEEEEE] rounded-lg cursor-pointer"
            :src="
              brand.brand.lg_logo || require('@/assets/img/jpg/empty-brand.jpg')
            "
            @click="isFiltered = false"
          />
        </div>

        <!-- Categories -->
        <div class="category-box">
          <ul class="flex flex-col space-y-[18px]">
            <li
              v-for="item in brand.categories"
              :key="item.id"
              class="hover:text-orange cursor-pointer"
              @click="setSotrCategory(item.slug)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>

        <!-- Price -->
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

      <!-- Category Info -->
      <div class="w-10/12 pl-[38px]">
        <DynamicRouter />
        <div class="flex items-center justify-between">
          <div class="flex items-center xl:space-x-[12px] 2xl:space-x-[22px]">
            <h1
              class="text-[30px] text-black font-medium mt-[12px] font-firsNeueMedium 2xl:text-[40px]"
            >
              {{ brand.brand.name }} весь ассортимент
            </h1>
            <span class="text-[14px] text-gray"
              >{{ brand.products.total }} товаров</span
            >
          </div>

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

        <!-- All Products -->
        <div class="mt-[32px]">
          <div :class="isGridCol ? 'category-grid' : 'category-grid-row'">
            <ProductsBaseProduct
              v-for="item in brandProducts"
              :key="item.id"
              :product="item.products[0]"
            />
          </div>
        </div>

        <div class="mt-[32px]">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>

        <!-- Sorted Products -->
        <div class="mt-[32px]">
          <div
            v-show="false"
            :class="isGridCol ? 'category-grid' : 'category-grid-row'"
          >
            <ProductsBaseProduct
              v-for="item in sortedProducts"
              :key="item.id"
              :product="item"
            />
          </div>
        </div>

        <!-- Sorted Products -->
        <div class="mt-[32px]">
          <div
            v-show="false"
            :class="isGridCol ? 'category-grid' : 'category-grid-row'"
          >
            <ProductsBaseProduct
              v-for="item in brandProducts"
              :key="item.id"
              :product="item.products[0]"
            />
          </div>
        </div>

        <ReusedSlotEmty
          v-if="brandProducts.length === 0"
          class="mt-[32px]"
          :is-active-btn="false"
          :image-src="require('@/assets/img/icons/empty-cart.svg')"
        >
          <template #header>
            <h1 class="w-[600px] text-center text-[32px] font-medium">
              Товаровы по данному брэнду отсутствуют
            </h1>
          </template>

          <template #description>
            <p class="text-gray text-[16px] max-w-[374px] text-center">
              Попробуйте поискать товары другого брэнда
            </p>
          </template>
        </ReusedSlotEmty>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandPage',
  layout: 'BrandCategoryLayout',
  async asyncData({ $axiosURL, params, $router }) {
    // Fetch Brand Id
    try {
      const response = await $axiosURL.get(`/brands/${params.id}`)

      return {
        brand: response.data,
        brandProducts: response.data.products.data,
      }
    } catch (error) {
      console.error('Error fetching:', error)
    }

    // this.$router.push({
    //   query: {
    //     brand: this.id,
    //     category: this.sortCategory,
    //   },
    // })

    // // Fetch Sorted Categories
    // try {
    //   const response = await $axiosURL.get(
    //     `/products?brand=${params.id}&category=${sortCategory}`
    //   )

    //   this.sortedCategories = response.data.products.data

    //   $router.push({
    //     query: {
    //       brand: params.id,
    //       sort: this.sortBy,
    //     },
    //   })
    // } catch (error) {
    //   console.error('Error fetching:', error)
    // }

    // // Fetch Sorted Products
    // try {
    //   const response = await this.$axiosURL.get(
    //     `/products?&brand=${params.id}&sort=${this.sortBy}`
    //   )

    //   this.sortedProducts = response.data.products.data

    //   $router.push({
    //     query: {
    //       brand: params.id,
    //       category: this.sortCategory,
    //     },
    //   })
    // } catch (error) {
    //   console.error('Error fetching:', error)
    // }
  },
  data() {
    return {
      id: this.$route.params.id,
      price: 0,
      sorts: [
        { value: 'cheap', label: 'Подешевле' },
        { value: 'popular', label: 'Популярные' },
        { value: 'expensive', label: 'Подороже' },
        { value: 'rating', label: 'Высокий рейтинг' },
        { value: 'orders', label: 'Много заказов' },
        { value: 'recently', label: 'Добавлены недавно' },
      ],
      isFiltered: false,
      categoryId: 0,
      isGridCol: true,
      sortBy: '',
      sortCategory: '',
      sortedCategories: [],
      sortedProducts: [],
    }
  },
  head() {
    return {
      title: `Брэнд | ${this.id}`,
    }
  },
  watch: {
    sortBy(newValue, oldValue) {
      this.fetchSortedProducts()
      this.isFiltered = true
    },
  },
  methods: {
    filterByCategory(id) {
      this.isFiltered = true
      this.categoryId = id
    },
    setSotrCategory(val) {
      this.sortCategory = val
      this.fetchSortedCategories()
    },
  },
}
</script>
