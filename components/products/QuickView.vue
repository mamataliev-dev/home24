<template>
  <div
    class="fixed inset-0 z-50 bg-black bg-opacity-65 flex justify-center items-center"
  >
    <div class="bg-white rounded-md shadow-lg w-[984px]" @click.stop>
      <div
        class="flex justify-between items-center rounded-md px-[32px] py-[15px] 2xl:py-[24px] bg-[#F7F7F7]"
      >
        <h1 class="font-medium text-[24px] text-black font-firsNeueMedium">
          {{ product?.name }}
        </h1>

        <button @click="$emit('closeModal'), false">
          <a-icon class="text-orange text-[30px]" type="close" />
        </button>
      </div>

      <div class="flex space-x-[32px] p-[20px] 2xl:p-[32px]">
        <div class="w-1/2">
          <VueSlickCarousel
            ref="c1"
            :as-nav-for="$refs.c2"
            :focus-on-select="true"
          >
            <div
              v-for="(image, index) in product?.images || 1"
              :key="index"
              class="flex space-x-[25px]"
            >
              <img
                class="m-auto w-[400px] h-[400px] 2xl:w-[488px] 2xl:h-[500px] border border-[#F2F2FA] rounded-lg relative"
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

          <VueSlickCarousel
            ref="c2"
            :as-nav-for="$refs.c1"
            :slides-to-show="product?.images.length || 1"
            :focus-on-select="true"
            class="mt-[24px]"
          >
            <div v-for="(image, index) in product?.images || 1" :key="index">
              <img
                class="c1-img cursor-pointer w-[60px] h-[60px] rounded-lg border border-[#F2F2FA]"
                :src="image.md_img"
                alt=""
              />
            </div>
          </VueSlickCarousel>
        </div>

        <div class="flex flex-col space-y-[20px] 2xl:space-y-[18px] w-1/2">
          <div class="flex justify-between">
            <div class="flex items-center space-x-3">
              <img
                class="w-[14px] h-[14px]"
                src="@/assets/img/star.svg"
                alt=""
              />
              <span class="text-black text-[16px]">
                {{ product?.info.stars || 0 }}
              </span>
            </div>

            <div class="flex items-center space-x-3">
              <a-icon class="text-gray" type="message" />
              <span class="text-gray text-[16px]">
                {{ product?.info.comments.length }} Отзывов
              </span>
            </div>

            <div>
              <span class="text-gray text-[16px]"
                >Код товара: {{ product?.id }}</span
              >
            </div>
          </div>

          <div
            class="flex flex-col space-y-[25px] 2xl:space-y-[42px] bg-[#F9F9F9] p-[24px] rounded-md"
          >
            <div class="flex items-center justify-between">
              <div>
                <h1
                  class="text-black font-medium text-[24px] font-firsNeueMedium"
                >
                  {{ formattedPrice }} сум
                </h1>

                <h3
                  v-if="product?.discount !== null"
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

          <div v-if="characteristics?.length > 0">
            <div
              v-for="(item, index) in characteristics[0].characteristics"
              :key="index"
              class="flex items-end justify-between mt-[14px]"
            >
              <span class="text-[#5D5D5F]">{{ item.name }}:</span>
              <div
                class="flex-1 mx-2 border-b border-dotted text-[#5D5D5F]"
              ></div>
              <span class="text-[#020105] font-medium text-end">{{
                item.options[0]?.name
              }}</span>
            </div>

            <button
              class="flex items-center justify-start space-x-[8px] mt-[15px]"
              @click="$router.push(`/product/${product?.slug}`)"
            >
              <span class="text-orange font-medium">Подробнее о товаре</span>
              <span class="text-orange el-icon-right"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'QuickViewComponent',
  components: {
    VueSlickCarousel,
  },
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    product() {
      return this.productData?.product
    },
    attributes() {
      return this.productData?.attributes
    },
    branches() {
      return this.productData?.branches
    },
    characteristics() {
      return this.productData?.characteristics
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
    addProduct() {},
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
.slick-track {
  display: flex !important;
  gap: 20px !important;
}
</style>
