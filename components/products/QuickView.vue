<template>
  <div>
    <div
      class="fixed inset-0 z-50 bg-black bg-opacity-65 flex justify-center items-center"
    >
      <div class="bg-white rounded-md shadow-lg w-[984px]" @click.stop>
        <div
          class="flex justify-between items-center rounded-md px-[32px] py-[24px] bg-[#F7F7F7]"
        >
          <h1 class="font-medium text-[24px] text-black font-firsNeueMedium">
            ОФИСНОЕ КРЕСЛО 6206A-2
          </h1>

          <button @click="$emit('closeModal'), false">
            <a-icon class="text-orange text-[30px]" type="close" />
          </button>
        </div>

        <div class="flex space-x-[32px] p-[32px]">
          <div class="w-1/2">
            <h1>Title</h1>
            <!-- <div class="swiper swiper-1">
            <div class="swiper-wrapper">
              <div v-for="i in 3" :key="i" class="swiper-slide">
                <div class="slider-content slider-content-1">
                  <img src="@/assets/img/jpg/ad-baner.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
          </div> -->
          </div>

          <div class="flex flex-col space-y-[32px] w-1/2">
            <div class="flex justify-between">
              <div class="flex items-center space-x-3">
                <img
                  class="w-[14px] h-[14px]"
                  src="@/assets/img/star.svg"
                  alt=""
                />
                <span class="text-black text-[16px]">5</span>
              </div>

              <div class="flex items-center space-x-3">
                <a-icon class="text-gray" type="message" />
                <span class="text-gray text-[16px]">10 Отзывов</span>
              </div>

              <div>
                <span class="text-gray text-[16px]">Код товара: 1375043</span>
              </div>
            </div>

            <div
              class="flex flex-col space-y-[42px] bg-[#F9F9F9] p-[24px] rounded-md"
            >
              <div class="flex items-start justify-between">
                <div>
                  <h1
                    class="text-black font-medium text-[24px] font-firsNeueMedium"
                  >
                    25 880 000 СУМ
                  </h1>

                  <h3 class="text-gray line-through font-firsNeueMedium">
                    28 880 000 СУМ
                  </h3>
                </div>

                <div class="flex space-x-4">
                  <nuxt-link to="/compare">
                    <img src="@/assets/img/comparison.svg" alt="" />
                  </nuxt-link>

                  <button class="addToFavorite">
                    <img src="@/assets/img/like.svg" alt="" />
                  </button>
                </div>
              </div>

              <div class="flex flex-col space-y-[12px]">
                <button
                  class="flex items-start space-x-[12px] p-[15px] justify-center text-white bg-orange rounded-md"
                  @click="addProduct"
                >
                  <img src="@/assets/img/icons/add-cart.svg" alt="" />
                  <span>Добавить в корзину</span>
                </button>

                <button
                  class="flex items-start space-x-[12px] p-[15px] justify-center text-orange border border-orange rounded-md"
                  @click="buyInOneClick"
                >
                  <img src="@/assets/img/icons/tap.svg" alt="" />
                  <span>Купить в один клик</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'QuickViewComponent',
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay])

    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // autoplay: {
      //   delay: 1500,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
  methods: {
    addToFavorite() {},
    addProduct() {},
    buyInOneClick() {},
  },
}
</script>
