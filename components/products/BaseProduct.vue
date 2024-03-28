<template>
  <div>
    <ProductsQuickView v-show="isQuickView" @closeModal="closeModal" />

    <div
      class="top-grid-item"
      @mouseover="showTip = true"
      @mouseleave="showTip = false"
    >
      <div class="relative">
        <div>
          <img
            class="rounded-xl relative w-[100%] xl:h-[300px] 2xl:h-[336px]"
            src="@/assets/img/jpg/test-image.jpg"
            alt=""
          />
          <div v-show="showTip">
            <div
              class="absolute z-50 top-[12px] right-[12px] flex flex-col space-y-[14px]"
            >
              <button @click="addProductToFavourites">
                <img src="@/assets/img/icons/compare-view.svg" alt="" />
              </button>

              <button @click="compareProduct">
                <img src="@/assets/img/icons/add-product-view.svg" alt="" />
              </button>
            </div>

            <div class="absolute z-50 inset-0 flex justify-center items-center">
              <button
                class="shadow bg-white py-[14px] px-[19px] rounded-full"
                @click=";(isQuickView = true), (showTip = false)"
              >
                Быстрый просмотр
              </button>
            </div>
          </div>
        </div>
        <span
          class="absolute bottom-[12px] left-[12px] text-red font-bold text-lg"
          >-30%</span
        >
      </div>

      <div class="top-grid-item-info rounded-lg">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <span class="font-firsNeueRegular">3 512 750 сум</span>
            <span class="line-through text-[#9A999B] font-firsNeueRegular"
              >3 512 750</span
            >
          </div>

          <img src="@/assets/img/order-bag.svg" alt="" />
        </div>

        <div class="flex space-x-2">
          <img src="@/assets/img/icons/star-full.svg" alt="" />
          <span class="font-firsNeueLight">5.0</span>
        </div>

        <h1 class="font-medium text-[14px] leading-[20px]">
          Руководительское кресло Metta Комплект 5.1 (Чёрный)
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTip: false,
      isQuickView: false,
    }
  },
  methods: {
    compareProduct() {
      this.$router.push(`/compare/${1}`)
    },
    addProductToFavourites() {},
    closeModal(val) {
      this.isQuickView = val
    },
  },
}
</script>
