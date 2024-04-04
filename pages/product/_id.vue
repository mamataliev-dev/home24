<template>
  <div class="container mx-auto mt-[32px]">
    <div class="grid grid-cols-12">
      <!-- Product View -->
      <div class="flex flex-col xl:col-span-9 2xl:col-span-8">
        <!-- Images / Characteristics -->
        <div class="flex space-x-[32px]">
          <div>
            <VueSlickCarousel
              ref="c2"
              :as-nav-for="$refs.c1"
              :slides-to-show="product.images.length"
              :focus-on-select="true"
            >
              <div v-for="(image, index) in product.images" :key="index">
                <img
                  class="image-item h-[80px] cursor-pointer rounded-lg border border-[#F2F2FA]"
                  :src="image.md_img"
                  alt=""
                />
              </div>
            </VueSlickCarousel>

            <VueSlickCarousel
              ref="c1"
              :as-nav-for="$refs.c2"
              :focus-on-select="true"
            >
              <div v-for="(image, index) in product.images" :key="index">
                <img
                  class="w-[530px] h-[530px] border border-[#F2F2FA] rounded-lg relative"
                  :src="image.md_img"
                  alt=""
                />

                <div
                  v-if="product?.discount !== null"
                  class="absolute bottom-[18px] right-[18px] z-10 text-red"
                >
                  <span class="text-2xl font-bold"
                    >-{{ product?.discount }}%</span
                  >
                </div>
              </div>
            </VueSlickCarousel>
          </div>

          <div class="flex flex-col">
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
            </el-tab-pane>

            <el-tab-pane
              :label="`Отзывы (${product.info.comments.length})`"
              name="second"
            >
              <div class="">
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
                    <!--  -->
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
              @click="buyInOneClick"
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
  mounted() {
    console.log('*************main-product*************', this.productData)
  },
  methods: {
    async fetchProductArrtibute(id) {
      await this.$store.dispatch('fetchProductId', id)

      // this.$router.push({
      //   query: id,
      // })
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
.image-item {
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
