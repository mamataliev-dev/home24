<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between">
      <div class="flex flex-col space-y-[14px]">
        <h1 class="main-title">Избранное</h1>
        <span class="text-[16px] font-firsNeueRegular"
          >Товаров: {{ products.length }}</span
        >
      </div>

      <div v-show="false" class="flex items-center space-x-[40px]">
        <button
          class="text-orange text-[16px] w-auto border-b border-orange leading-[24px] font-firsNeueRegular"
        >
          Очистить
        </button>

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
    </div>

    <!-- Products -->
    <div class="main-grid mt-[32px]">
      <ProductsBaseProduct
        v-for="item in products"
        :key="item.id"
        :product="item"
        @click="$router.push(`/product/${item.products[0]?.slug}`)"
      />
    </div>

    <!-- If Emty -->
    <ReusedSlotEmty
      v-if="products.length === 0"
      :image-src="require('@/assets/img/icons/empty-favourites.svg')"
    >
      <template #header>
        <h1 class="text-[32px] font-medium">В избранном пока ничего нет</h1>
      </template>

      <template #description>
        <p class="text-gray text-[16px] max-w-[374px] text-center">
          Вы можете добавлять товары кликая на сердечко, которое ноходится прямо
          на карточке товара
        </p>
      </template>
    </ReusedSlotEmty>

    <ProductsTopProducts v-show="isEmpty" />
  </div>
</template>

<script>
export default {
  name: 'FavouritesPage',
  layout: 'UserDataLayout',
  data() {
    return {
      isEmpty: false,
      products: [],
      sortCategory: '',
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
      title: 'Избранные товары',
    }
  },
  mounted() {
    this.fetchFavoutire()
  },
  methods: {
    async fetchFavoutire() {
      try {
        const products = localStorage.getItem('favourite')
        const productsData = JSON.parse(products)

        const response = await this.$axios.$post(
          'https://e-shop.ndc.uz/api/get_products',
          {
            products: productsData.products,
            category: null,
          }
        )

        console.log(response)

        this.products = response.products
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
