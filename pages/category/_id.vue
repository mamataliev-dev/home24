<template>
  <div class="container mx-auto">
    <!-- If bad serach -->
    <!-- <div v-show="false">
      <h1 class="main-title">
        Результаты поиска по запросу "Мягкая мебель из тропик дерево"
      </h1>

      <ReusedSlotEmty :image-src="require('@/assets/img/icons/bad-query.svg')">
        <template #header>
          <h1 class="text-[32px] font-medium">Мы не нашли то, что вы искали</h1>
        </template>

        <template #description>
          <p class="text-gray text-[16px] max-w-[374px] text-center">
            Возможно, в названии товара ошибка или у нас пока нет такого товара
          </p>
        </template>
      </ReusedSlotEmty>
    </div> -->

    <div class="flex">
      <div class="flex flex-col space-y-[40px] w-2/12 mt-[32px]">
        <!-- Categories -->
        <div class="category-box">
          <h1 class="category-title">Категории</h1>

          <ul>
            <li>
              <ul>
                <li></li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Sort By -->
        <div class="category-box">
          <h1 class="category-title">Сортировать</h1>

          <div class="flex flex-col space-y-[8px]">
            <div v-for="item in 4" :key="item">
              <input type="checkbox" name="по популярности" />
              <label class="text-black text-[16px]">по популярности</label>
            </div>
          </div>
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

        <!-- Color -->
        <div class="category-box">
          <div class="flex items-end justify-between">
            <h1 class="category-title">Цвет</h1>
            <button
              class="underline text-gray text-[14px]"
              @click="clearColorSet"
            >
              очистить
            </button>
          </div>

          <div class="grid grid-cols-5 auto-rows-auto gap-2">
            <button
              v-for="color in 10"
              :key="color"
              class="w-[32px] h-[32px] rounded-full bg-orange"
            ></button>
          </div>
        </div>
      </div>

      <!-- Category Info -->
      <div class="w-10/12 pl-[38px]">
        <DynamicRouter />
        <div class="flex items-center justify-between">
          <div>
            <h1 class="main-title">Офисная мебель</h1>
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

        <CategoryInfo />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryID',
  layout: 'CategoryLayout',
  data() {
    return {
      price: 0,
      sortCategory: '',
      minPrice: 0,
      sorts: [
        {
          value: 'Подешевле',
          label: 'Подешевле',
        },
        {
          value: 'Популярные',
          label: 'Популярные',
        },
        {
          value: 'Подешевле',
          label: 'Подешевле',
        },
        {
          value: 'Подороже',
          label: 'Подороже',
        },
        {
          value: 'Высокий рейтинг',
          label: 'Высокий рейтинг',
        },
        {
          value: 'Много заказов',
          label: 'Много заказов',
        },
        {
          value: 'Добавлены недавно',
          label: 'Добавлены недавно',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Категории | ID',
    }
  },
  methods: {
    getProduct(val) {
      this.$router.push(`/product/${val}`)
      console.log(val)
    },
    clearColorSet() {},
    handlePriceChange() {},
  },
}
</script>
