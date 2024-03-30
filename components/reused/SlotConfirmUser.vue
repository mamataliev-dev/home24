<template>
  <div>
    <div
      class="fixed inset-0 z-50 bg-black bg-opacity-65 flex justify-center items-center"
    >
      <div class="bg-white rounded-md shadow-lg w-[590px]" @click.stop>
        <div
          class="flex justify-between items-center rounded-md pt-[22px] pb-[14px] pr-[30px] pl-[40px] bg-[#F7F7F7]"
        >
          <h1 class="font-medium text-[24px] text-black font-firsNeueMedium">
            {{ title }}
          </h1>

          <button @click="$emit('closeModal'), false">
            <a-icon class="text-orange text-[30px]" type="close" />
          </button>
        </div>

        <div
          class="flex justify-between items-center rounded-md pt-[22px] pb-[14px] pr-[30px] pl-[40px]"
        >
          <form @submit.prevent="submit">
            <!-- Phone Number -->
            <div class="flex flex-col space-y-[6px]">
              <label class="font-medium text-gray">Номер телефона</label>
              <input
                v-model="phoneNumber"
                v-mask="'+998 (##) ###-####'"
                class="w-[510px] p-[16px] border border-[#EBEBEB] rounded-lg outline-[orange]"
                type="text"
                placeholder="+998 (__) ___ __ __"
                @input="formatPhoneNumber"
              />
              <label class="text-red italic">{{ errorText }}</label>
            </div>

            <!-- Confirm Code -->
            <div v-show="isLogIn" class="flex flex-col space-y-[6px]">
              <label class="font-medium text-gray">СМС-код</label>
              <input
                v-model="confirmCode"
                class="w-[510px] p-[16px] border border-[#EBEBEB] rounded-lg outline-[orange]"
                type="text"
                placeholder="Введите СМС-код"
                @input="formatConfirmCode"
              />

              <label class="text-red italic">{{ errorMsg }}</label>
            </div>
          </form>
        </div>

        <div
          class="flex flex-col justify-between px-[40px] pt-[28px] pb-[40px]"
        >
          <button
            v-show="isLogIn"
            class="mb-[20px] flex items-center justify-center space-x-[11px] text-red font-medium"
            @click="$emit('sendCodeAgain')"
          >
            <img src="@/assets/img/icons/retry.svg" alt="" />
            <span>Отправить код еще раз</span>
          </button>

          <button
            class="w-[100%] text-white py-[16px] px-[108px] rounded-md bg-orange"
            @click="handleClick"
          >
            Войти
          </button>
        </div>

        <div v-show="false" class="flex justify-between px-[40px] py-[54px]">
          <button
            class="py-[16px] px-[108px] rounded-md bg-[#EBEBEB]"
            @click="$emit('closeModal'), false"
          >
            Нет
          </button>

          <button
            class="text-white py-[16px] px-[108px] rounded-md bg-orange"
            @click="$emit('confirmOperation')"
          >
            ДА
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Default Value',
    },
    isLogIn: {
      type: Boolean,
      default: false,
    },
    errorMsg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      phoneNumber: '+998',
      errorText: '',
      confirmCode: '',
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.phoneNumber)
      console.log(this.phoneNumber)
    },
    authorization() {
      this.$emit('confirmCode', this.confirmCode)
    },
    formatPhoneNumber() {
      if (this.phoneNumber.length < 18) {
        this.errorText = 'Номер телефона должен содержать 12 цифр'
      } else {
        this.errorText = ''
      }
    },
    formatConfirmCode() {},
    handleClick() {
      if (this.isLogIn) {
        this.authorization()
      } else {
        this.submit()
      }
    },
  },
}
</script>
