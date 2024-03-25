<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between">
      <div class="flex flex-col space-y-[14px]">
        <h1 class="main-title">Избранное</h1>
        <span class="text-[16px] font-firsNeueRegular">Товаров: 5</span>
      </div>

      <div v-show="!isEmpty" class="flex items-center space-x-[40px]">
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
    <div
      v-show="!isEmpty"
      class="grid grid-cols-1 md:grid-cols-6 gap-x-[24px] gap-y-[48px] mt-[32px]"
    >
      <ProductsBaseProduct
        v-for="item in 12"
        :key="item"
        @click="getProduct(item)"
      />
    </div>

    <!-- If Emty -->
    <ReusedSlotEmty
      v-show="isEmpty"
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
}
</script>
