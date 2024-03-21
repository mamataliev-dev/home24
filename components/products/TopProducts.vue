<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="flex items-end space-x-[24px] mb-[24px]">
      <h1 class="title-temp">Хиты продаж</h1>
      <nuxt-link to="/" class="text-orange text-[20px] underline"
        >Все товары</nuxt-link
      >
    </div>

    <div class="main-grid">
      <div class="top-grid-item" @click="getProduct(val)">
        <div class="relative">
          <img
            class="rounded-xl"
            src="@/assets/img/jpg/test-image.jpg"
            alt=""
          />
          <span
            class="absolute bottom-[12px] left-[12px] text-red font-bold text-lg"
            >-30%</span
          >
        </div>

        <div class="top-grid-item-info">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <span>3 512 750 сум</span>
              <span class="line-through text-[#9A999B]">3 512 750</span>
            </div>

            <img src="@/assets/img/order-bag.svg" alt="" />
          </div>

          <div class="flex space-x-2">
            <img src="@/assets/img/star.svg" alt="" />
            <span class="font-light">5.0</span>
          </div>

          <h1 class="font-medium text-[14px]">
            Руководительское кресло Metta Комплект 5.1 (Чёрный)
          </h1>
        </div>
      </div>

      <div class="top-grid-item" @click="getProduct(val)">
        <div class="relative">
          <img
            class="rounded-xl"
            src="@/assets/img/jpg/test-image.jpg"
            alt=""
          />
          <span
            class="absolute bottom-[12px] left-[12px] text-red font-bold text-lg"
            >-30%</span
          >
        </div>

        <div class="top-grid-item-info">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <span>3 512 750 сум</span>
              <span class="line-through text-[#9A999B]">3 512 750</span>
            </div>

            <img src="@/assets/img/order-bag.svg" alt="" />
          </div>

          <div class="flex space-x-2">
            <img src="@/assets/img/star.svg" alt="" />
            <span class="font-light">5.0</span>
          </div>

          <h1 class="font-medium text-[14px]">
            Руководительское кресло Metta Комплект 5.1 (Чёрный)
          </h1>
        </div>
      </div>

      <div class="top-grid-item" @click="getProduct(val)">
        <div class="relative">
          <img
            class="rounded-xl"
            src="@/assets/img/jpg/test-image.jpg"
            alt=""
          />
          <span
            class="absolute bottom-[12px] left-[12px] text-red font-bold text-lg"
            >-30%</span
          >
        </div>

        <div class="top-grid-item-info">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <span>3 512 750 сум</span>
              <span class="line-through text-[#9A999B]">3 512 750</span>
            </div>

            <img src="@/assets/img/order-bag.svg" alt="" />
          </div>

          <div class="flex space-x-2">
            <img src="@/assets/img/star.svg" alt="" />
            <span class="font-light">5.0</span>
          </div>

          <h1 class="font-medium text-[14px]">
            Руководительское кресло Metta Комплект 5.1 (Чёрный)
          </h1>
        </div>
      </div>

      <div class="top-grid-item" @click="getProduct(val)">
        <div class="relative">
          <img
            class="rounded-xl"
            src="@/assets/img/jpg/test-image.jpg"
            alt=""
          />
          <span
            class="absolute bottom-[12px] left-[12px] text-red font-bold text-lg"
            >-30%</span
          >
        </div>

        <div class="top-grid-item-info">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <span>3 512 750 сум</span>
              <span class="line-through text-[#9A999B]">3 512 750</span>
            </div>

            <img src="@/assets/img/order-bag.svg" alt="" />
          </div>

          <div class="flex space-x-2">
            <img src="@/assets/img/star.svg" alt="" />
            <span class="font-light">5.0</span>
          </div>

          <h1 class="font-medium text-[14px]">
            Руководительское кресло Metta Комплект 5.1 (Чёрный)
          </h1>
        </div>
      </div>

      <div class="top-grid-item" @click="getProduct(val)">
        <div class="relative">
          <img
            class="rounded-xl"
            src="@/assets/img/jpg/test-image.jpg"
            alt=""
          />
          <span
            class="absolute bottom-[12px] left-[12px] text-red font-bold text-lg"
            >-30%</span
          >
        </div>

        <div class="top-grid-item-info">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <span>3 512 750 сум</span>
              <span class="line-through text-[#9A999B]">3 512 750</span>
            </div>

            <img src="@/assets/img/order-bag.svg" alt="" />
          </div>

          <div class="flex space-x-2">
            <img src="@/assets/img/star.svg" alt="" />
            <span class="font-light">5.0</span>
          </div>

          <h1 class="font-medium text-[14px]">
            Руководительское кресло Metta Комплект 5.1 (Чёрный)
          </h1>
        </div>
      </div>

      <div class="top-grid-item" @click="getProduct(val)">
        <div class="relative">
          <img
            class="rounded-xl"
            src="@/assets/img/jpg/test-image.jpg"
            alt=""
          />
          <span
            class="absolute bottom-[12px] left-[12px] text-red font-bold text-lg"
            >-30%</span
          >
        </div>

        <div class="top-grid-item-info">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <span>3 512 750 сум</span>
              <span class="line-through text-[#9A999B]">3 512 750</span>
            </div>

            <img src="@/assets/img/order-bag.svg" alt="" />
          </div>

          <div class="flex space-x-2">
            <img src="@/assets/img/star.svg" alt="" />
            <span class="font-light">5.0</span>
          </div>

          <h1 class="font-medium text-[14px]">
            Руководительское кресло Metta Комплект 5.1 (Чёрный)
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCategories',
  methods: {
    getProduct(val) {
      console.log(val)
    },
  },
}
</script>
