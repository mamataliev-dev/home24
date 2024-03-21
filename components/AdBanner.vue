<template>
  <div>
    <div class="bg-[#F4F5F5] flex items-center pt-[39px] pb-[57px]">
      <div class="container mx-auto flex items-center space-x-[23px]">
        <div class="">
          <div class="swiper swiper-1">
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
          </div>
        </div>

        <div class="">
          <div class="swiper swiper-2">
            <div class="swiper-wrapper">
              <div v-for="i in 3" :key="i" class="swiper-slide">
                <div
                  class="slider-content slider-content-2 bg-white rounded-xl px-[32px] pt-[30px]"
                >
                  <div class="flex justify-between">
                    <h2 class="text-lg font-medium">ТОВАР ДНЯ</h2>

                    <button class="bg-[#F4F5F5] p-[6px] rounded-full">
                      <img src="@/assets/img/like-product.svg" alt="" />
                    </button>
                  </div>

                  <div class="mt-[34px] flex items-center space-x-[25px]">
                    <img
                      class="w-[139px] h-[246px]"
                      src="@/assets/img/jpg/test-image.jpg"
                      alt=""
                    />

                    <div class="flex flex-col w-[140px] space-y-[16px]">
                      <!-- Discount -->
                      <button
                        class="flex items-center justify-between py-[10px] px-[13px] bg-[#F4F5F5] rounded-xl"
                      >
                        <span>Cкидка</span>

                        <span class="bg-orange font-bold text-sm text-white"
                          >-90%</span
                        >
                      </button>

                      <!-- Total Price -->
                      <div>
                        <div class="flex items-start space-x-[4px]">
                          <h3 class="text-lg font-medium">1.240.000</h3>
                          <span class="text-[10px]">сум</span>
                        </div>

                        <h3 class="line-through text-[#949498]">1.500.000</h3>
                      </div>

                      <!-- Feedbacks -->
                      <div class="flex items-center space-x-1">
                        <img src="@/assets/img/star.svg" alt="" />
                        <span class="text-gray">Нет отзывов</span>
                      </div>

                      <!-- Product Title -->
                      <div>Realme Pad Mini 32GB + 3GB LTE (синий)</div>

                      <!-- Orded Button -->
                      <button
                        class="flex items-center justify-center space-x-[12px] bg-orange py-[9px] w-[154px]"
                      >
                        <img src="@/assets/img/bag-white.svg" alt="" />

                        <span class="font-medium text-sm text-white"
                          >В КОРЗИНУ</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
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
}
</script>

<style scoped>
.swiper-1 {
  width: 800px;
  position: relative;
  overflow: hidden;
}

.swiper-2 {
  width: 400px;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.slider-content-1 {
  height: 400px;
}

.slider-content-2 {
  height: 400px;
}

.swiper-button-prev,
.swiper-button-next {
  width: 38px;
  height: 38px;
  background-color: #b5b5b5;
  opacity: 0.5;
  border-radius: 50%;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 16px !important;
  font-weight: bold;
  color: black;
}

.swiper-pagination {
  /* bottom: -40px; */
  /* color: orange; */
}

.swiper-pagination-bullet-active {
  background-color: orange !important;
}

.swiper-pagination-bullet {
  background-color: rgb(238, 169, 39) !important;
}
</style>
