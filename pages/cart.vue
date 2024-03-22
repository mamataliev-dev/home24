<template>
  <div :class="{ 'bg-[#F4F5F5]': !isEmpty }">
    <div class="container mx-auto pt-[24px]">
      <div>
        <DynamicRouter />
        <h1 class="main-title">Корзина</h1>
        <span>Товаров: 5</span>
      </div>

      <div class="flex space-x-[24px] pb-[73px]">
        <div class="w-8/12 mt-[32px] bg-white rounded-lg px-[45px] py-[34px]">
          <div class="flex space-x-[12px] pb-[14px] border-b border-[#DDDDDD]">
            <input type="radio" />
            <label>Выбрать для заказа</label>
          </div>

          <div
            v-for="item in 3"
            :key="item"
            class="flex justify-between items-center py-[24px] border-b border-[#DDDDDD]"
          >
            <div class="flex items-center space-x-[12px]">
              <input type="radio" />

              <div class="flex items-center space-x-[32px]">
                <img
                  class="w-[123px] h-[115px] border border-[#F4F5F5] rounded-md"
                  src="@/assets/img/jpg/quick-view.jpg"
                  alt=""
                />

                <div class="flex flex-col space-y-[10px]">
                  <h2 class="font-medium text-[14px]">
                    ОФИСНОЕ КРЕСЛО 6206A-2
                  </h2>

                  <div v-for="item in 3" :key="item" class="flex space-x-1">
                    <span class="font-medium text-[14px] text-[#727474]"
                      >Размер:</span
                    >
                    <span class="font-medium text-[14px]">M</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <el-input-number
                v-model="productOrders"
                size="mini"
              ></el-input-number>
            </div>

            <div class="flex flex-col items-end">
              <div class="flex items-center space-x-[16px]">
                <button @click="addToFavoutire">
                  <img class="w-[20px]" src="@/assets/img/like.svg" alt="" />
                </button>

                <button @click="deleteProduct">
                  <img src="@/assets/img/icons/trash.svg" alt="" />
                </button>
              </div>

              <div class="flex flex-col items-end space-x-[11px] mt-[20px]">
                <span class="text-[20px]">2 000 000 сум</span>
                <span class="text-[18px] text-[#9A999B] line-through"
                  >2 000 000 сум</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="w-4/12 mt-[32px] bg-white rounded-lg p-[24px]">
          <h1 class="font-semibold text-[22px]">Ваш заказ</h1>

          <div class="flex flex-col space-y-[33px] mt-[30px]">
            <!-- Porducts -->
            <div
              v-for="item in 2"
              :key="item"
              class="flex flex-col space-y-[16px] pb-[16px] border-b border-lightGray"
            >
              <div class="flex justify-between">
                <h2 class="text-[18px] font-medium">Товары, 2 шт</h2>
                <span class="text-[18px] font-medium">4 000 000 сум</span>
              </div>

              <div class="flex justify-between">
                <span class="text-[#727474] text-[16px]">Доставка:</span>
                <span class="text-[#727474] text-[16px]">бесплатно</span>
              </div>
            </div>

            <!-- Total -->
            <div class="flex justify-between">
              <h2 class="text-[18px] font-medium">Итого</h2>
              <span class="text-[18px] font-medium">4 000 000 сум</span>
            </div>

            <!-- Order -->
            <button
              class="text-white text-[20px] font-medium bg-orange p-[18px] rounded-lg"
            >
              Перейти к оформлению
            </button>
          </div>
        </div>
      </div>

      <!-- Is Emty -->
      <ReusedSlotEmty
        v-show="isEmpty"
        :image-src="require('@/assets/img/icons/empty-cart.svg')"
      >
        <template #header>
          <h1 class="text-[32px] font-medium">В корзине пока нет товаров</h1>
        </template>

        <template #description>
          <p class="text-gray text-[16px] max-w-[374px] text-center">
            Но вы всегда можете ее наполнить
          </p>
        </template>
      </ReusedSlotEmty>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCart',
  layout: 'CartLayout',
  data() {
    return {
      isEmpty: false,
      productOrders: 0,
    }
  },
  head() {
    return {
      title: 'Корзина',
    }
  },
  methods: {
    addToFavoutire() {},
    deleteProduct() {},
  },
}
</script>
