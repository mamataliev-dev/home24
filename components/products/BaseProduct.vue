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
            class="border border-[#F2F2FA] rounded-xl relative w-[100%] h-[100%]"
            :src="product?.products[0]?.images[0]?.md_img"
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
          v-if="product?.products[0]?.discount_price !== null"
          class="absolute bottom-[12px] left-[12px] text-red font-bold text-lg"
          >-{{ product?.products[0]?.discount.pivot.percent }}%</span
        >
      </div>

      <div
        class="top-grid-item-info rounded-lg"
        @click="$router.push(`/product/${product?.products[0]?.slug}`)"
      >
        <div class="flex items-center justify-between">
          <div
            v-if="product?.products[0]?.discount_price !== null"
            class="flex flex-col"
          >
            <span class="font-firsNeueRegular">
              {{ product?.products[0]?.discount_price }} сум</span
            >
            <span class="line-through text-[#9A999B] font-firsNeueRegular">{{
              product?.products[0]?.price
            }}</span>
          </div>

          <div v-else>
            <span class="font-firsNeueRegular">
              {{ product?.products[0]?.price }} сум</span
            >
          </div>

          <button>
            <img src="@/assets/img/order-bag.svg" alt="" />
          </button>
        </div>

        <div class="flex space-x-2">
          <img src="@/assets/img/icons/star-full.svg" alt="" />
          <span class="font-firsNeueLight">{{ product?.stars || 0 }}</span>
        </div>

        <h1 class="font-medium text-[14px] leading-[20px]">
          {{ product?.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
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
