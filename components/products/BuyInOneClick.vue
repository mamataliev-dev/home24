<template>
  <div
    class="fixed inset-0 z-50 bg-black bg-opacity-65 flex justify-center items-center"
  >
    <div class="bg-white rounded-md shadow-lg w-[590px]" @click.stop>
      <!-- Header -->
      <div
        class="flex justify-between items-center rounded-md pt-[22px] pb-[14px] pl-[40px] pr-[30px] bg-[#F7F7F7]"
      >
        <h1 class="font-medium text-[24px] text-black font-firsNeueMedium">
          Купить в один клик
        </h1>

        <button @click="$emit('closeModal'), false">
          <a-icon class="text-orange text-[30px]" type="close" />
        </button>
      </div>

      <!--Info -->
      <div class="flex flex-col space-y-[24px] pt-[24px] pb-[28px] px-[31px]">
        <!--  Title / Price / Quatity -->
        <div class="flex space-x-[12px] pb-[24px] border-b border-[#EBEBEB]">
          <img
            class="w-[82px] h-[82px] rounded-lg border border-[#F4F5F5]"
            :src="product?.images[0].md_img"
            alt=""
          />

          <div class="felx flex-col space-y-[6px]">
            <span class="text-[14px]">{{ product?.name }}</span>

            <div class="w-full flex items-end justify-between">
              <span class="text-[14px] w-[300px]"
                >{{ formattedRealPrice }} сум</span
              >

              <div class="flex flex-col space-y-[5px]">
                <span
                  :class="product.stock === 0 ? 'text-red' : ''"
                  class="text-gray text-[12px]"
                  >В наличии: {{ product.stock }}</span
                >
                <div
                  class="w-[128px] flex items-end justify-between py-[6px] px-[16px] border border-[#F2F2FA] rounded-lg"
                >
                  <button
                    class="text-[20px] font-medium"
                    @click="decrementProduct"
                  >
                    <span class="el-icon-minus"></span>
                  </button>
                  <span class="font-firsNeueRegular text-[20px]">
                    {{ quantity }}
                  </span>
                  <button
                    class="text-[20px] font-medium"
                    @click="incrementProduct"
                  >
                    <span class="el-icon-plus"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- If empty -->
        <div
          v-if="product.stock === 0"
          class="flex items-center justify-center"
        >
          <span class="p-[16px] text-[18px] text-red font-medium"
            >К сожалению, товара нет в наличии</span
          >
        </div>

        <div v-if="product.stock !== 0" class="flex flex-col space-y-[24px]">
          <!-- Customer Name -->
          <div class="flex flex-col space-y-[6px]">
            <label class="font-medium text-[16px]"
              >Ф.И.О <span class="text-gray">*</span></label
            >
            <input
              v-model="userName"
              class="input w-full border border-[#EBEBEB] p-[16px] rounded-lg placeholder:text-gray text-[16px] focus:outline-orange"
              type="text"
              placeholder="Ф.И.О"
            />
            <label v-if="isEmptyUserName" class="text-[14px] text-red italic"
              >Пожалуйста заполните свою Ф.И.О</label
            >
          </div>

          <!-- Customer Phone Number -->
          <div class="flex flex-col space-y-[6px]">
            <label class="font-medium text-[16px]"
              >Телефон <span class="text-gray">*</span></label
            >

            <input
              v-model="userPhone"
              v-mask="'+998 (##) ###-####'"
              class="w-full border border-[#EBEBEB] p-[16px] rounded-lg placeholder:text-gray text-[16px] focus:outline-orange"
              type="text"
              placeholder="+998 (__) ___ __ __"
            />
            <label v-if="isEmptyUserPhone" class="text-[14px] text-red italic"
              >Длина поля номер телефона должна быть 12
            </label>
          </div>

          <button
            class="w-full p-[16px] bg-orange rounded-lg focus:outline-orange"
            @click="orderProduct"
          >
            <span class="font-medium text-white">Оформить</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Successfully ordered -->
    <div
      v-if="isSuccessModal"
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
              Заказ оформлен. Мы свяжемся <br />
              с вами в ближайшее время
            </p>
          </div>

          <button
            class="w-full font-medium bg-orange rounded-lg text-white px-[37px] py-[16px] mt-[40px]"
            @click=";(isSuccessModal = false), $emit('closeModal', false)"
          >
            Хорошо
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 1,
      userName: '',
      userPhone: '+998',
      isEmptyUserName: false,
      isEmptyUserPhone: false,
      isSuccessModal: false,
      originalPrice: 0,
    }
  },
  computed: {
    product() {
      return this.productData
    },
    formattedPrice() {
      const text = this.product.price.toString()

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
    orderProduct() {
      if (this.userName === '') {
        this.isEmptyUserName = true
      } else if (this.userPhone.length < 18) {
        this.isEmptyUserPhone = true
        this.isEmptyUserName = false
      } else {
        this.isEmptyUserName = false
        this.isEmptyUserPhone = false
        const cleanPhone = this.userPhone.replace(/\D/g, '')

        try {
          const response = this.$axiosURL.post('/order/one_click', {
            name: this.userName,
            phone_number: cleanPhone,
            product_id: this.product.id,
            count: this.quantity,
          })

          if (response) {
            this.isSuccessModal = true
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    decrementProduct() {
      if (this.quantity > 1) {
        this.quantity -= 1
        this.product.real_price -= this.originPrice
      }
    },
    incrementProduct() {
      if (this.quantity < this.product.stock) {
        this.quantity += 1

        this.product.real_price += this.originPrice
      }
    },
  },
}
</script>
