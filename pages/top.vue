<template>
  <div class="container mx-auto">
    <h1 class="main-title">Хиты прожад</h1>

    <div class="flex mt-[32px]">
      <div class="flex flex-col w-2/12 mt-[32px]">
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
  head() {
    return {
      title: 'Хиты продаж',
    }
  },
  getChosenCategory() {},
}
</script>
