<template>
  <div class="container mx-auto mt-[32px]">
    <div class="grid grid-cols-12">
      <!-- Product View -->
      <div class="flex flex-col xl:col-span-9 2xl:col-span-8">
        <!-- Images / Characteristics -->

        <div id="product" class="flex space-x-[32px]">
          <div class="w-5/12 flex items-start">
            <div class="mr-2 first_slide">
              <VueSlickCarousel
                :ref="slideTwo"
                :vertical="true"
                :vertical-swiping="true"
                :arrows="false"
                :as-nav-for="c1"
                :slides-to-show="6"
                :focus-on-select="true"
                @afterChange="activeItem"
                @beforeChange="syncSliders"
              >
                <div v-for="(img, index) in product.images" :key="img.id">
                  <div
                    :class="{ 'border-orange': index === activeSlider }"
                    class="h-[80px] w-[80px] mx-auto border border-[#F2F2FA] rounded-xl cursor-pointer p-1"
                  >
                    <img
                      class="object-contain w-full h-full"
                      :src="img.lg_img"
                      :alt="product.for_search"
                    />
                  </div>
                </div>
              </VueSlickCarousel>
            </div>

            <div
              class="w-[230px] h-[230px] rounded-lg border border-[#F2F2FA] p-2 relative"
            >
              <div
                v-if="product.discount"
                class="z-10 absolute bottom-4 right-10 flex flex-col items-center justify-end"
              >
                <svg
                  class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%]"
                  width="71"
                  height="60"
                  viewBox="0 0 71 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.39197 44.4974L31.5498 2.88616C33.9831 -0.471304 39.0073 -0.407333 41.3543 3.011L69.7678 44.3935C71.94 47.5571 70.617 51.933 67.0126 53.2503C42.5257 62.1992 26.8576 62.2496 3.93275 53.4015C0.350396 52.0189 -0.86143 47.6066 1.39197 44.4974Z"
                    fill="#E90A0A"
                  />
                </svg>
                <p class="font-ttfirs text-white text-xs leading-[0.8] z-10">
                  скидки
                </p>
                <h4
                  class="text-base text-white font-semibold leading-tight font-ttfirs mb-1 z-10"
                >
                  {{ product.discount }}%
                </h4>
              </div>

              <VueSlickCarousel
                v-if="product.images.length !== 0"
                :ref="slideOne"
                :arrows="false"
                :as-nav-for="c2"
                :focus-on-select="true"
                :infinite="false"
                @beforeChange="syncSliders"
              >
                <div
                  v-for="img in product.images"
                  :key="img.id"
                  class="h-[450px]"
                >
                  <img
                    class="object-contain w-full h-full"
                    :src="img.lg_img"
                    :alt="product.for_search"
                  />
                </div>
              </VueSlickCarousel>
            </div>
          </div>

          <div class="w-3/12 flex flex-col">
            <!-- Stars / Comments / Id -->
            <div class="flex justify-between">
              <div class="flex items-center space-x-3">
                <img
                  class="w-[14px] h-[14px]"
                  src="@/assets/img/star.svg"
                  alt=""
                />
                <span class="text-black text-[16px]">
                  {{ product.info.stars || 0 }}
                </span>
              </div>

              <div class="flex items-center space-x-3">
                <a-icon class="text-gray" type="message" />
                <span class="text-gray text-[16px]">
                  {{ product.info.comments.length }} Отзывов
                </span>
              </div>

              <div>
                <span class="text-gray text-[16px]"
                  >Код товара: {{ product.id }}</span
                >
              </div>
            </div>

            <!-- Title -->
            <div class="mt-[12px] mb-[24px]">
              <h1 class="text-[28px] text-[#020105] font-firsNeueMedium">
                {{ product.name }}
              </h1>
            </div>

            <!-- Attributes -->
            <div class="flex flex-col space-y-[32px]">
              <div class="product-items-box">
                <div
                  v-for="(item, i) in attributes"
                  :key="i"
                  class="flex flex-col space-y-[12px]"
                >
                  <div class="flex space-x-[8px]">
                    <span class="text-[16px] text-gray">{{ item.title }}:</span>
                    <span class="font-firsNeueMedium text-[16px] text-black"
                      >128GB</span
                    >
                  </div>

                  <div class="flex space-x-[12px]">
                    <div v-for="(option, j) in item.options" :key="j">
                      <button
                        :class="
                          option.active === false
                            ? 'diagonal-line-container'
                            : ''
                        "
                        class="py-[10px] px-[17px] border border-[#F2F2FA] rounded-lg"
                        @click="fetchProductArrtibute(option.slug)"
                      >
                        <el-tooltip
                          class="item"
                          effect="light"
                          content="Нет в наличии"
                          :placement="
                            option.active === false ? 'top-start' : 'null'
                          "
                        >
                          <span class="font-firsNeueMedium text-black">
                            {{ option.title }}
                          </span>
                        </el-tooltip>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Quantity -->
                <div class="flex flex-col space-y-[12px]">
                  <span class="text-[16px] text-gray">Количество:</span>

                  <div class="flex items-center space-x-[16px]">
                    <div
                      class="w-[128px] flex items-center justify-between py-[12px] px-[16px] border border-[#F2F2FA] rounded-lg"
                    >
                      <button
                        class="text-[20px] font-medium"
                        @click="quantity--"
                      >
                        <span class="el-icon-minus"></span>
                      </button>
                      <span class="font-firsNeueRegular text-[20px]">
                        {{ quantity }}
                      </span>
                      <button
                        class="text-[20px] font-medium"
                        @click="quantity++"
                      >
                        <span class="el-icon-plus"></span>
                      </button>
                    </div>

                    <span class="text-[14px] text-gray"
                      >Осталось всего {{ product.stock }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Feedbacks / Info -->
        <div class="mt-[76px]">
          <el-tabs v-model="activeTab" @tab-click="handleClick">
            <el-tab-pane label="Описание товара" name="first">
              <div class="mt-[32px]">
                <div v-html="product.info.desc"></div>
              </div>

              <div
                v-if="product.info.desc === ''"
                class="flex flex-col items-center justify-center space-y-[24px] mt-[48px]"
              >
                <img src="@/assets/img/icons/empty-desc.svg" alt="" />

                <span class="text-black font-medium">Описание отсутствует</span>
              </div>
            </el-tab-pane>

            <el-tab-pane
              :label="`Отзывы (${product.info.comments.length})`"
              name="second"
            >
              <div>
                <div
                  v-for="(item, index) in product.info.comments"
                  :key="index"
                  class="flex flex-col pb-[32px] mb-[32px] border-b border-[#F2F2FA] space-y-[16px] mt-[32px]"
                >
                  <!-- User / Stars / Date -->
                  <div class="flex flex-col space-y-[8px]">
                    <span class="font-medium">Shaxram G’iyosov</span>

                    <div class="flex space-x-[32px]">
                      <div class="flex items-center space-x-[8px]">
                        <img
                          v-for="(elem, i) in 5"
                          :key="i"
                          src="@/assets/img/icons/feedback-start.svg"
                          alt=""
                        />
                      </div>

                      <div>
                        <span class="text-gray text-[14px]"
                          >16 октября 2022 г.</span
                        >
                      </div>
                    </div>
                  </div>

                  <!-- Text -->
                  <p class="text-gray">
                    Очень крутой кресло, качество на высшем уровне. Рекомендую
                    другим.
                  </p>
                </div>
              </div>

              <!-- Empty Feedbacks -->
              <div
                v-if="product.info.comments.length === 0"
                class="flex flex-col items-center justify-center space-y-[24px] mt-[48px]"
              >
                <img src="@/assets/img/icons/emty-feedbacks.svg" alt="" />

                <div class="flex flex-col items-center space-x-[8px]">
                  <h2 class="font-medium text-black">
                    Ваш отзыв будет первым!
                  </h2>
                  <p class="text-gray text-[14px]">
                    Оставьте отзыв, и другие пользователи будут вам благодарны.
                  </p>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="Характеристики" name="third">
              <div class="mt-[32px]">
                <div
                  v-for="(item, i) in characteristics"
                  :key="i"
                  class="mt-[40px]"
                >
                  <span class="font-medium text-[18px]">{{ item.name }}</span>

                  <div class="flex flex-col mt-[24px] w-[390px]">
                    <div
                      v-for="(j, ind) in item.characteristics"
                      :key="ind"
                      class="flex items-end justify-between space-y-[24px]"
                    >
                      <span class="text-[#5D5D5F] font-firsNeueRegular"
                        >{{ j.name }}:</span
                      >
                      <div
                        class="flex-1 mx-2 border-b border-dotted text-[#5D5D5F]"
                      ></div>
                      <span class="text-[#020105] text-[14px] text-end">
                        {{ j.options[0]?.name }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>

      <!-- Price / Order / Delivery -->
      <div
        class="xl:col-span-3 2xl:col-span-3 flex flex-col items-end space-y-[16px]"
      >
        <div
          class="xl:w-[320px] 2xl:w-[414px] flex flex-col space-y-[25px] 2xl:space-y-[42px] bg-[#F9F9F9] p-[24px] rounded-md"
        >
          <div class="flex items-center justify-between">
            <div>
              <h1
                class="text-black font-medium text-[24px] font-firsNeueMedium"
              >
                {{ formattedPrice }} сум
              </h1>

              <h3
                v-if="product.discount !== null"
                class="text-gray line-through font-firsNeueMedium"
              >
                {{ formattedRealPrice }} сум
              </h3>
            </div>

            <div class="flex space-x-4">
              <button @click="setCompare">
                <img src="@/assets/img/comparison.svg" alt="" />
              </button>

              <button @click="setFavourite">
                <img src="@/assets/img/like.svg" alt="" />
              </button>
            </div>
          </div>

          <div class="flex flex-col space-y-[12px]">
            <button
              class="flex items-start space-x-[12px] p-[15px] justify-center text-white bg-orange rounded-md"
              @click="addProductToCart"
            >
              <img src="@/assets/img/icons/add-cart.svg" alt="" />
              <span>Добавить в корзину</span>
            </button>

            <button
              class="flex items-start space-x-[12px] p-[15px] justify-center text-orange border border-orange rounded-md"
              @click="isBuyOneClick = true"
            >
              <img src="@/assets/img/icons/tap.svg" alt="" />
              <span>Купить в один клик</span>
            </button>
          </div>
        </div>

        <div
          class="w-[320px] 2xl:w-[414px] border border-[#F2F2FA] rounded-lg pl-[18px] py-[20px] relative"
        >
          <div class="flex flex-col space-y-[12px]">
            <span class="w-[74px] font-medium text-black border-b border-dashed"
              >Доставка</span
            >

            <span class="w-[126px] text-gray text-[12px] font-firsNeueRegular"
              >Доставка к курьером на дом</span
            >
          </div>

          <img
            class="absolute bottom-[8px] right-[2px]"
            src="@/assets/img/png/delivery.png"
            alt=""
          />
        </div>

        <div
          class="w-[320px] 2xl:w-[414px] border border-[#F2F2FA] rounded-lg pl-[18px] py-[20px] relative"
        >
          <div class="flex flex-col space-y-[12px]">
            <span
              class="w-[207px] font-medium text-black border-b border-dashed"
              >ОБРАТИТЕСЬ К СПЕЦИАЛИСТУ!
            </span>

            <div class="w-[213px] flex justify-between items-start">
              <span class="w-[126px] text-gray text-[12px] font-firsNeueRegular"
                >Служба поддержки: (998-71) 200-7-002</span
              >

              <span class="text-orange text-[10px] font-firsNeueMedium"
                >ЕСТЬ ВОПРОСЫ?</span
              >
            </div>
          </div>

          <img
            class="absolute bottom-0 right-0"
            src="@/assets/img/png/call.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <ProductsTopProducts />

    <!-- Buy In One Click -->
    <ProductsBuyInOneClick
      v-if="isBuyOneClick"
      :product-data="product"
      @closeModal="closeBuyOneClickModal"
    />

    <!-- Successfully ordered -->
    <div
      v-if="isSuccessOrder"
      class="fixed inset-0 z-50 bg-black bg-opacity-65 flex justify-center items-center"
    >
      <div class="bg-white rounded-md shadow-lg w-[590px]" @click.stop>
        <!-- Header -->
        <div
          class="flex justify-between items-center rounded-md pt-[22px] pb-[14px] pl-[40px] pr-[30px] bg-[#F7F7F7]"
        >
          <h1 class="font-medium text-[24px] text-black font-firsNeueMedium">
            Заказ принят
          </h1>

          <button @click="isSuccessModal = false">
            <a-icon class="text-orange text-[30px]" type="close" />
          </button>
        </div>

        <div class="flex flex-col items-center justify-center p-[40px]">
          <div class="flex flex-col space-y-[24px] items-start justify-center">
            <svg
              class="m-auto"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="#D0F4E4" />
              <path
                d="M38.147 46.5858C37.366 47.3668 36.0996 47.3668 35.3186 46.5858L30.0828 41.35C29.5581 40.8253 29.5581 39.9747 30.0828 39.45C30.6075 38.9253 31.4581 38.9253 31.9828 39.45L35.3186 42.7858C36.0996 43.5668 37.366 43.5668 38.147 42.7858L48.0161 32.9167C48.5408 32.392 49.3915 32.392 49.9161 32.9167C50.4408 33.4413 50.4408 34.292 49.9161 34.8167L38.147 46.5858Z"
                fill="#009A10"
              />
            </svg>

            <p class="text-[18px] font-medium text-center">
              Заказ №32839 оформлен. Мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <div class="flex gap-x-[24px] mt-[40px]">
            <button
              class="font-medium bg-lightGray rounded-lg text-black px-[37px] py-[16px]"
            >
              Продолжить покупку
            </button>

            <button
              class="font-medium bg-orange rounded-lg text-white px-[37px] py-[16px]"
            >
              Перейти к просмотру
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 
    <div
        v-if="option.title == 'Цвет'"
        class="w-[46px] h-[54px] border border-[#F2F2FA] rounded-lg p-[3px] bg-[#781ECD] cursor-pointer"
      ></div>
      -->
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'ProductId',
  components: {
    VueSlickCarousel,
  },
  layout: 'BrandCategoryLayout',
  async asyncData({ store, params }) {
    await store.dispatch('fetchProductId', params.id)

    await store.dispatch('fetchShowcases')
  },
  data() {
    return {
      quantity: 1,
      activeTab: 'first',
      c1: null,
      c2: null,
      activeSlider: 0,
      isBuyOneClick: false,
      isSuccessOrder: false,
    }
  },
  head() {
    return {
      title: this.product.name,
    }
  },
  computed: {
    productData() {
      return this.$store.state.productId
    },
    product() {
      return this.productData.product
    },
    attributes() {
      return this.productData.attributes
    },
    branches() {
      return this.productData.branches
    },
    characteristics() {
      return this.productData.characteristics
    },
    formattedPrice() {
      const text = this.product?.price.toString()

      const formatted = text
        ?.split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g)
        .join(' ')
        .split('')
        .reverse()
        .join('')

      return formatted
    },
    formattedRealPrice() {
      const text = this.product?.real_price.toString()

      const formatted = text
        ?.split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g)
        .join(' ')
        .split('')
        .reverse()
        .join('')

      return formatted
    },
  },
  methods: {
    closeBuyOneClickModal(val) {
      this.isBuyOneClick = val
    },

    async fetchProductArrtibute(id) {
      await this.$store.dispatch('fetchProductId', id)

      // this.$router.push({
      //   query: id,
      // })
    },

    syncSliders(_, nextPosition) {
      this.c1.goTo(nextPosition)
      this.c2.goTo(nextPosition)
    },
    slideOne(el) {
      this.c1 = el
    },
    slideTwo(el) {
      this.c2 = el
    },
    activeItem(num) {
      this.activeSlider = num
    },
    handleClick() {},
    addProductToCart() {},
    buyInOneClick() {},
    setFavourite() {
      this.isFavourite = !this.isFavourite

      if (this.isFavourite === true) {
        this.$message({
          showClose: true,
          message: 'Успешно добавлено в избранное',
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: 'Успешно удалено из избранного',
          type: 'warning',
        })
      }
    },

    async setCompare() {
      this.isCompare = !this.isCompare

      try {
        const response = await this.$axios.$post(
          'https://e-shop.ndc.uz/api/comparison',
          {
            products: [this.product.id],
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        //  Status returns undefined
        if (response.status === 200) {
          this.$message({
            message: 'Успешно добавлено в сравнение',
            type: 'success',
          })
        }

        this.$message({
          message: 'Успешно добавлено в сравнение',
          type: 'success',
        })

        if (!this.isCompare) {
          this.$message({
            message: 'Успешно удалено из сравнения',
            type: 'warning',
          })
        }
      } catch (error) {
        console.error('Post Error:', error)
      }
    },
  },
}
</script>

<style>
/* #product .slick-track {
  display: flex;
  flex-direction: column !important;
} */

#product .first_slide .slick-slide {
  width: auto !important;
}

#product .slick-list {
  height: 528px;
}

#product .image-item {
  width: 80px !important;
}

.el-tabs__item.is-active {
  font-size: 18px;
  color: black;
  font-family: 'Firs Neue Medium';
}

.el-tabs__item {
  font-size: 18px;
  color: #5d5d5f;
  font-family: 'Firs Neue Regular';
}

.el-tabs__item:hover {
  color: black;
}

.el-tabs__active-bar {
  background: #000;
  height: 3px;
}

.diagonal-line-container {
  position: relative;
  background-color: #f0f0f0;
}

.el-tabs__nav-wrap::after {
  background: #f2f2fa;
}

.diagonal-line-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top right,
    transparent calc(50% - 1px),
    white,
    transparent calc(50% + 1px)
  );
}
</style>
