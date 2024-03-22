<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="flex flex-col w-2/12 mt-[32px]">
        <div class="xl:mb-[20px] 2xl:mb-[40px]">
          <img src="@/assets/img/png/artel.png" alt="" />
        </div>

        <!-- Categories -->
        <div class="category-box">
          <ul class="flex flex-col space-y-[18px]">
            <li
              v-for="item in 10"
              :key="item"
              class="hover:text-orange cursor-pointer"
              @click="getChosenCategory"
            >
              Категории
            </li>
          </ul>
        </div>

        <!-- Price -->
        <div class="category-box">
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
          <div class="flex items-center space-x-[22px]">
            <h1 class="main-title">Artel весь ассортимент</h1>
            <span class="text-[14px] text-gray">100 товаров</span>
          </div>

          <div class="flex space-x-[60px]">
            <div class="flex items-center space-x-[16px]">
              <span class="text-gray text-[14px]">Сортировка</span>

              <el-select v-model="sortCategory" placeholder="Подешевле">
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
              <button>
                <img src="@/assets/img/icons/columns.svg" alt="" />
              </button>
              <button>
                <img src="@/assets/img/icons/rows.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div class="mt-[32px]">
          <div class="category-grid">
            <ProductsBaseProduct
              v-for="item in 10"
              :key="item"
              @click="getProduct(item)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandPage',
  layout: 'CategoryLayout',
  haed() {
    return {
      title: 'Брэнд | Artel',
    }
  },
  methods: {
    getChosenCategory() {},
  },
}
</script>
