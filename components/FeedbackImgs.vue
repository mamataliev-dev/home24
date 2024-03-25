<template>
  <div class="container mx-auto conponent-margin-top">
    <h1 class="title">Фото довольных клиентов</h1>

    <!-- <div class="main-grid"></div> -->

    <div class="swiper-product">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div>
            <div v-for="item in 5" :key="item" class="slider-content">
              <div class="flex items-center gap-x-[8px]">
                <img
                  class="w-[56px] h-[56px] rounded-full"
                  src="@/assets/img/png/client-logo.png"
                  alt=""
                />

                <span class="font-firsNeueMedium text-[14px]"
                  >Samsung Узбекистан</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-pagination-product"></div>
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
        el: '.swiper-pagination',
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
