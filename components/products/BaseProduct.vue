<template>
  <div>
    <!-- isQuickView -->
    <ProductsQuickView
      v-if="isQuickView"
      :product-data="productData"
      @closeModal="closeModal"
    />

    <div
      class="top-grid-item min-w-[252px]"
      @mouseover="showTip = true"
      @mouseleave="showTip = false"
    >
      <div class="relative">
        <div>
          <div class="relative">
            <img
              :class="isGridCol ? 'w-[434px] h-[427px]' : 'h-[336px]'"
              class="product-img border border-[#F2F2FA] rounded-xl relative w-[100%] [h-[336px]"
              :src="product.images[0].md_img"
              alt=""
            />

            <div
              v-if="isFavorite"
              class="absolute top-[12px] right-[12px] active-item"
              @click="setFavourite"
            >
              <ImgLikeBtn :is-active="true" />
            </div>
          </div>

          <div v-show="showTip">
            <!-- Favourity/Compare Btns -->
            <div
              v-if="!isFavorite"
              class="absolute z-50 top-[12px] right-[12px] flex flex-col space-y-[14px]"
            >
              <button @click="setFavourite">
                <ImgLikeBtn :is-active="isFavourite" />
              </button>

              <button @click="setCompare">
                <ImgCompareBtn :is-active="isCompare" />
              </button>
            </div>

            <div
              v-if="isFavorite"
              class="absolute z-50 top-[50px] right-[12px] flex flex-col space-y-[14px]"
            >
              <button @click="setCompare">
                <ImgCompareBtn :is-active="isCompare" />
              </button>
            </div>

            <!-- Quick view btn -->
            <div class="absolute z-20 inset-0 flex justify-center items-center">
              <button
                class="shadow bg-white py-[14px] px-[19px] rounded-full"
                @click="openQuickView(product.slug)"
              >
                Быстрый просмотр
              </button>
            </div>

            <div
              class="absolute top-0 left-0 w-[100%] h-[100%] bg-gray z-10 opacity-35 rounded-lg"
            ></div>
          </div>
        </div>

        <!-- Discount -->
        <span
          v-if="product?.discount_price !== null"
          class="absolute bottom-[12px] left-[12px] text-red font-bold text-lg"
          >-{{ product?.discount.pivot.percent }}%</span
        >
      </div>

      <!-- Price / Stars / Title -->
      <div
        class="h-[137px] top-grid-item-info rounded-lg"
        @click="$router.push(`/product/${product?.slug}`)"
      >
        <div class="flex items-center justify-between">
          <div v-if="product?.discount_price !== null" class="flex flex-col">
            <span class="font-firsNeueRegular">
              {{ product?.discount_price }} сум</span
            >
            <span class="line-through text-[#9A999B] font-firsNeueRegular">{{
              formattedRealPrice
            }}</span>
          </div>

          <div v-else>
            <span class="font-firsNeueRegular">
              {{ formattedRealPrice }} сум</span
            >
          </div>

          <button @click="orderProduct">
            <img src="@/assets/img/order-bag.svg" alt="" />
          </button>
        </div>

        <div class="flex items-center space-x-2">
          <img src="@/assets/img/icons/star-full.svg" alt="" />
          <span class="text-[14px] font-firsNeueLight">{{
            product?.stars || 'Нет отзывов'
          }}</span>
        </div>

        <h1 class="truncate-text font-medium text-[14px] leading-[20px]">
          {{ product?.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
    isGridCol: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showTip: false,
      isQuickView: false,
      isFavourite: false,
      isCompare: false,
      productData: {},
      isFavorite: false,
    }
  },
  computed: {
    formattedPrice() {
      const text = this.product.price.toString()

      const formatted = text
        .split('')
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
      const text = this.product.real_price.toString()

      const formatted = text
        .split('')
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
  watch: {
    isFavorite(newVal) {
      if (newVal) {
        this.checkFavorite()
        this.isFavorite = newVal
      }
    },
  },
  mounted() {
    this.checkFavorite()
  },
  methods: {
    checkFavorite() {
      const products = localStorage.getItem('favourite')

      const parsedProducts = JSON.parse(products)
      const id = this.product.id

      parsedProducts.products.forEach((item) => {
        if (id === item) {
          this.isFavorite = true
        } else {
          this.isFavorite = false
        }
      })
    },
    closeModal(val) {
      this.isQuickView = val
    },
    setFavourite() {
      this.isFavourite = !this.isFavourite

      let storageObject
      const storedValue = localStorage.getItem('favourite')

      if (storedValue === null) {
        storageObject = {
          products: [],
        }
      } else {
        storageObject = JSON.parse(storedValue)
      }

      const productIndex = storageObject.products.indexOf(this.product.id)
      if (productIndex > -1) {
        storageObject.products.splice(productIndex, 1)
      } else {
        storageObject.products.push(this.product.id)
      }

      localStorage.setItem('favourite', JSON.stringify(storageObject))

      if (this.isFavourite) {
        this.$message({
          message: 'Успешно добавлено в избранное',
          type: 'success',
        })
      } else {
        this.$message({
          message: 'Успешно удалено из избранного',
          type: 'warning',
        })
      }
    },
    async setCompare() {
      this.isCompare = !this.isCompare

      try {
        await this.$axios.$post(
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

        if (!this.isCompare) {
          this.$message({
            showClose: true,
            message: 'Успешно удалено из сравнения',
            type: 'warning',
          })
        } else {
          this.$message({
            showClose: true,
            message: 'Успешно добавлено в сравнение',
            type: 'success',
          })
        }
      } catch (error) {
        console.error('Post Error:', error)
      }
    },
    orderProduct() {},
    async openQuickView(id) {
      this.isQuickView = true
      this.showTip = false

      try {
        const response = await this.$axiosURL.get(`/products/${id}`)
        this.productData = response.data

        console.log(response.data)
      } catch (error) {
        console.error('Error fetching:', error)
      }
    },
  },
}
</script>

<style scoped>
.active-item {
  z-index: 100 !important;
}

.truncate-text {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
