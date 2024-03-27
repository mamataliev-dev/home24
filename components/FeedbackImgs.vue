<template>
  <div>
    <div class="feedback-blackout">
      <div class="feedback-content">
        <button class="mb-[20px]" @click="isModalOpen = false">
          <span class="el-icon-close text-white text-[30px]"></span>
        </button>

        <div class="flex gap-x-[10px]">
          <div
            class="w-[409px] px-[24px] pt-[24px] pb-[36px] bg-white rounded-lg"
          >
            <div class="flex items-center mb-[16px]">
              <img
                class="w-[56px] h-[56px] rounded-full"
                src="@/assets/img/png/apple-logo.png"
                alt=""
              />

              <span class="text-[14px] font-firsNeueRegular"
                >Apple Узбекистан</span
              >
            </div>

            <p class="">
              Большое спасибо за всю мебель. Очень качественно и по доступным
              ценам. Мы очень рады совместной работе с вами!
              <br />
              Большое спасибо за всю мебель. Очень качественно и по доступным
              ценам. Мы очень рады совместной работе с вами! <br />
              Большое спасибо за всю мебель. Очень качественно и по доступным
              ценам. Мы очень рады совместной работе с вами! <br />
              Большое спасибо за всю мебель. Очень качественно и по доступным
              ценам. Мы очень рады совместной работе с вами! <br />
              Большое спасибо за всю мебель. Очень качественно и по доступным
              ценам. Мы очень рады совместной работе с вами!
            </p>
          </div>

          <div class="w-[808]">
            <div class="swiper-feedback-view mySwiper2">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
            <div thumbsSlider="" class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto conponent-margin-top">
      <h1 class="title">Фото довольных клиентов</h1>

      <div class="swiper-feedback">
        <div class="swiper-wrapper">
          <div v-for="item in 5" :key="item" class="swiper-slide">
            <div class="slider-content">
              <div class="flex items-center gap-x-[8px] mb-[12px]">
                <img
                  class="w-[56px] h-[56px] rounded-full"
                  src="@/assets/img/png/client-logo.png"
                  alt=""
                />

                <span class="font-firsNeueMedium text-[14px]"
                  >Samsung Узбекистан</span
                >
              </div>

              <div class="flex flex-col items-start gap-y-[12px]">
                <img
                  class="w-[390px] h-[280px] rounded-lg"
                  src="@/assets/img/jpg/client.jpg"
                  alt=""
                />

                <p class="max-w-[390px]">
                  Большое спасибо за всю мебель. Очень качественно и по
                  доступным ценам. Мы очень рады совместной работе с вами!
                </p>

                <button class="text-orange" @click="isModalOpen = true">
                  Читать...
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="swiper-pagination"></div> -->
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
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  data() {
    return {
      isModalOpen: false,
    }
  },
  mounted() {
    Swiper.use([Navigation, Pagination])

    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper-feedback', {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 4,
      spaceBetween: 24,
    })

    const swiperView = new Swiper('.swiper-feedback-view', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    })

    const swiper2 = new Swiper('.mySwiper2', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: Swiper,
      },
    })
  },
}
</script>

<style scoped>
.feedback-blackout {
  margin: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
}

.feedback-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.swiper-feedback {
  overflow: hidden;
  position: relative !important;
}

.swiper-product {
  overflow: hidden;
  position: relative !important;
}

.swiper-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  position: initial !important;
}

.swiper-pagination-product {
  display: flex;
  justify-content: center;
  gap: 0px;
}

.swiper-button-prev:after,
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-next:after {
  content: '';
}

.swiper-button-prev {
  left: 16px;
}

.swiper-button-next {
  right: 16px;
}

.swiper-button-prev,
.swiper-button-next {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 50%;
  top: 43%;
}
</style>
