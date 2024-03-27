<template>
  <div class="bg-[#F4F5F5] flex items-center pt-[39px] pb-[57px]">
    <div class="grid grid-cols-12 gap-x-[23px] container mx-auto">
      <div class="col-span-8 relative">
        <div class="swiper-baner">
          <div class="swiper-wrapper">
            <div v-for="i in 3" :key="i" class="swiper-slide">
              <div class="slider-content">
                <img
                  class="xl:h-[386px] 2xl:h-[432px] rounded-xl"
                  src="@/assets/img/jpg/ad-baner.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="baner-swiper-pagination"></div>
        <div class="swiper-button-prev">
          <img
            class="w-[48px] h-[48px]"
            src="@/assets/img/icons/swiper-left.svg"
            alt=""
          />
        </div>

        <div class="swiper-button-next">
          <img
            class="w-[48px] h-[48px]"
            src="@/assets/img/icons/swiper-right.svg"
            alt=""
          />
        </div>
      </div>

      <div class="col-span-4">
        <div class="swiper-product">
          <div class="swiper-wrapper">
            <div v-for="i in 3" :key="i" class="swiper-slide">
              <div
                class="slider-content bg-white rounded-xl xl:px-[25px] 2xl:px-[32px] xl:pt-[25px] 2xl:pt-[30px] xl:pb-[30px] 2xl:pb-[45px]"
              >
                <div class="flex justify-between">
                  <h2 class="text-lg font-medium">ТОВАР ДНЯ</h2>

                  <button class="bg-[#F4F5F5] p-[6px] rounded-full">
                    <img src="@/assets/img/like-product.svg" alt="" />
                  </button>
                </div>

                <div
                  class="flex items-start xl:mt-[25px] 2xl:mt-[34px] justify-between"
                >
                  <img
                    class="w-[139px] h-[246px]"
                    src="@/assets/img/png/product-baner-image.png"
                    alt=""
                  />

                  <div
                    class="flex flex-col w-[140px] xl:space-y-[13px] 2xl:space-y-[16px]"
                  >
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
                        <h3 class="text-lg font-firsNeueMedium">1.240.000</h3>
                        <span class="text-[10px]">сум</span>
                      </div>

                      <h3
                        class="line-through text-[#949498] font-firsNeueRegular"
                      >
                        1.500.000
                      </h3>
                    </div>

                    <!-- Feedbacks -->
                    <div class="flex items-center space-x-1">
                      <img src="@/assets/img/star.svg" alt="" />
                      <span class="text-gray font-firsNeueRegular"
                        >Нет отзывов</span
                      >
                    </div>

                    <!-- Product Title -->
                    <div>Realme Pad Mini 32GB + 3GB LTE (синий)</div>

                    <!-- Orded Button -->
                    <button
                      class="flex items-center justify-center space-x-[12px] bg-orange py-[9px] w-[154px] rounded-lg"
                    >
                      <img src="@/assets/img/bag-white.svg" alt="" />

                      <span class="font-firsNeueMedium text-sm text-white"
                        >В КОРЗИНУ</span
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination-product"></div>
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
    const swiper = new Swiper('.swiper-baner', {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.baner-swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 1500,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 0,
    })

    /* eslint-disable no-unused-vars */
    const swiperProduct = new Swiper('.swiper-product', {
      direction: 'horizontal',
      loop: true,
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination-product',
        type: 'bullets',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 0,
    })
  },
}
</script>

<style scoped>
.swiper-baner {
  overflow: hidden;
  position: relative !important;
}

.swiper-product {
  overflow: hidden;
  position: relative !important;
}

.swiper-pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
  position: initial !important;
}

.swiper-pagination-product {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 0px;
}

.baner-swiper-pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.swiper-button-prev:after,
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-next:after {
  content: '';
}

.swiper-button-prev,
.swiper-button-next {
  width: 48px;
  height: 48px;
}
</style>
