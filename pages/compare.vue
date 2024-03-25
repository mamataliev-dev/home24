<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between">
      <div class="flex flex-col space-y-[14px]">
        <h1 class="main-title">Список сравнения</h1>
        <span class="text-[16px] font-firsNeueRegular">Товаров: 5</span>
      </div>

      <div v-show="!isEmpty" class="flex items-center space-x-[40px]">
        <button
          class="text-orange text-[16px] w-auto border-b border-orange leading-[24px] font-firsNeueRegular"
        >
          Очистить
        </button>

        <el-select v-model="sortCategory" placeholder="Подешевле">
          <el-option
            v-for="item in sorts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>

    <!-- Compare Porducts List -->
    <div v-show="!isEmpty" class="gold">
      <div class="compare-swiper mt-[22px]">
        <div class="swiper-wrapper">
          <div v-for="item in 5" :key="item" class="swiper-slide">
            <div class="border border-[#EBEBEB]">
              <div
                class="flex flex-col space-y-[16px] px-[16px] pt-[16px] pb-[11px]"
              >
                <button class="ml-auto" @click="deleteCompareProduct">
                  <i class="el-icon-close text-[24px]"></i>
                </button>

                <div
                  class="flex flex-col justify-center items-center space-y-[16px]"
                >
                  <img
                    class="w-[130px] h-[130px]"
                    src="@/assets/img/jpg/quick-view.jpg"
                    alt=""
                  />

                  <div
                    class="flex flex-col justify-center items-center space-y-[16px]"
                  >
                    <span
                      class="font-regular text-[16px] max-w-[294px] text-center"
                    >
                      Холодильник Samsung RB 29 FERNDSA/WT {{ item }}
                    </span>

                    <span class="font-medium text-[18px]">7 300 000 сум</span>
                  </div>
                </div>

                <div class="flex justify-between">
                  <div class="flex items-center space-x-1">
                    <img src="@/assets/img/icons/star-full.svg" alt="" />
                    <span class="font-firsNeueLight text-[13px]">5.0</span>
                  </div>

                  <div class="flex space-x-[16px]">
                    <button>
                      <img src="@/assets/img/icons/compare-view.svg" alt="" />
                    </button>

                    <button>
                      <img
                        src="@/assets/img/icons/add-product-view.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div
                v-for="item in 11"
                :key="item"
                class="flex flex-col p-[16px] border-t border-[#EBEBEB] space-y-[4px]"
              >
                <span class="font-firsNeueRegular text-[14px] text-gray"
                  >Фронтальная камера</span
                >
                <span class="text-[14px]">20mp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-button-prev">
        <img src="@/assets/img/icons/arrow-left.svg" alt="" />
      </div>

      <div class="swiper-button-next">
        <img src="@/assets/img/icons/arrow-right.svg" alt="" />
      </div>
    </div>

    <!-- Empty List -->
    <ReusedSlotEmty
      v-show="isEmpty"
      :image-src="require('@/assets/img/icons/empty-compare.svg')"
    >
      <template #header>
        <h1 class="text-[32px] font-medium">Сравнивать пока нечего</h1>
      </template>

      <template #description>
        <p class="text-gray text-[16px] max-w-[374px] text-center">
          Добавляйте товары к сравнению характеристики выбирайте самый
          подходящий вам товар
        </p>
      </template>
    </ReusedSlotEmty>

    <ProductsTopProducts v-show="isEmpty" />
  </div>
</template>

<script>
import { Swiper, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'ComparePage',
  layout: 'default',
  data() {
    return {
      isEmpty: false,
    }
  },
  head() {
    return {
      title: 'Сравните товары',
    }
  },
  mounted() {
    Swiper.use([Navigation])

    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.compare-swiper', {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },

        480: {
          slidesPerView: 2,
          spaceBetween: 0,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
    })
  },
  methods: {
    deleteCompareProduct() {},
  },
}
</script>

<style scoped>
.gold {
  position: relative !important;
}

.compare-swiper {
  overflow: hidden;
}

.swiper-button-prev {
  border: 1px solid #dedede;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: white;
}

.swiper-button-next {
  border: 1px solid #dedede;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: white;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  top: 265px;
  left: -25px;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-next {
  top: 265px;
  right: -25px;
}

.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  content: '';
}

.swiper-button-next:after,
.swiper-container-rtl .swiper-button-next:after {
  content: '';
}
</style>
