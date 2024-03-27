<template>
  <div class="container mx-auto">
    <h1 class="main-title">Акции</h1>

    <div class="flex mt-[32px] gap-x-[24px]">
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
      </div>

      <div class="flex flex-col gap-y-[23px]">
        <div>
          <img class="rounded-lg" src="@/assets/img/jpg/stock.jpg" alt="" />
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
