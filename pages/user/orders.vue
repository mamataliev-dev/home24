<template>
  <div class="container mx-auto">
    <h1 class="main-title">Мои Заказы</h1>

    <div class="flex justify-between mt-[32px]">
      <!-- NavBar -->
      <div
        class="w-2/12 flex space-y-[32px] flex-col border-r border-[#F2F2FA] mr-[24px]"
      >
        <nuxt-link to="/user/orders" class="profile-item-box">
          <img src="@/assets/img/icons/orders-active.svg" alt="" />
          <span class="text-orange text-[16px]">Мои заказы</span>
        </nuxt-link>

        <nuxt-link to="/user/settings" class="profile-item-box">
          <img src="@/assets/img/icons/profile.svg" alt="" />
          <span class="text-black text-[16px]">Профиль</span>
        </nuxt-link>

        <div
          class="profile-item-box cursor-pointer"
          @click="isModalLogOut = true"
        >
          <img src="@/assets/img/icons/log-out.svg" alt="" />
          <span class="text-black text-[16px]">Выйти</span>
        </div>
      </div>

      <!-- Contect -->
      <div class="w-10/12">
        <!-- Tab -->
        <div class="flex justify-between">
          <div class="flex gap-x-[24px]">
            <button
              :class="
                activeTab === 'all'
                  ? 'text-orange text-[20px] border-b border-orange leading-[28px]'
                  : 'text-gray text-[18px]'
              "
              @click="setActiveTab('all')"
            >
              Все заказы
            </button>

            <button
              :class="
                activeTab === 'unpaid'
                  ? 'text-orange text-[20px] border-b border-orange leading-[28px]'
                  : 'text-gray text-[18px]'
              "
              @click="setActiveTab('unpaid')"
            >
              Неоплаченные
            </button>
          </div>

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

        <!-- All Orders -->
        <div v-if="activeTab === 'all'">
          <!-- Products -->
          <div class="grid grid-cols-2 gap-x-[24px] gap-y-[32px] mt-[32px]">
            <div
              v-for="item in 5"
              :key="item"
              class="flex flex-col rounded-md order-item p-[25px] product-card"
            >
              <div
                class="flex items-center justify-between pb-[16px] border-b border-[#F2F2F2]"
              >
                <div class="flex flex-col space-y-[10px]">
                  <h1 class="text-[20px]">ID заказа 32839</h1>
                  <span class="text-gray text-[14px]"
                    >Обновлен 8 ноября 2022 г., 13:00</span
                  >
                </div>

                <!-- Order Status -->
                <div>
                  <button class="px-[12px] py-[8px] rounded-md bg-[#F0F9EA]">
                    <span class="text-[16px] font-medium text-green-500">{{
                      orderStatus
                    }}</span>
                  </button>
                </div>
              </div>

              <!-- Product Info -->
              <div
                class="flex justify-between py-[16px] border-b border-[#F2F2F2]"
              >
                <div class="flex flex-col space-y-[16px]">
                  <div class="flex flex-col space-y-[4px]">
                    <span class="text-gray text-[14px]">Дата заказа</span>
                    <span class="text-[16px]">8 ноября 2022 г, 12:59</span>
                  </div>

                  <div class="flex flex-col space-y-[4px]">
                    <span class="text-gray text-[14px]">Способ оплаты</span>
                    <span class="text-[16px]">Наличные</span>
                  </div>
                </div>

                <div class="flex flex-col space-y-[16px]">
                  <div class="flex flex-col space-y-[4px]">
                    <span class="text-gray text-[14px]">Способ получения</span>
                    <span class="text-[16px]">Самовывоз Home24.uz</span>
                  </div>

                  <div class="flex flex-col space-y-[4px]">
                    <span class="text-gray text-[14px]">Сумма заказа</span>
                    <span class="text-[16px]">250 000 сум</span>
                  </div>
                </div>
              </div>

              <!-- Total Products -->
              <div
                class="flex justify-between items-center pt-[16px]"
                :class="isDropDownList ? 'pb-[16px]' : 'pb-[0px]'"
              >
                <span class="text-[16px]">2 товара</span>

                <button @click="isDropDownList = !isDropDownList">
                  <img
                    class="transition-all"
                    :class="isDropDownList ? 'rotate-180' : 'rotate-0'"
                    src="@/assets/img/icons/arrow-up.svg"
                    alt=""
                  />
                </button>
              </div>

              <!-- Drop Down List -->
              <div
                v-for="item in 3"
                v-show="isDropDownList"
                :key="item"
                class="transition duration-300 origin-top transform scale-y-0"
                :class="isDropDownList ? 'scale-y-100' : 'scale-y-0'"
              >
                <div
                  class="flex justify-between py-[16px] border-t border-[#F2F2F2]"
                >
                  <div class="flex space-x-[24px]">
                    <img
                      class="w-[81px] h-[81px] border border-[#F2F2FA] rounded-md"
                      src="@/assets/img/jpg/quick-view.jpg"
                      alt=""
                    />

                    <div class="flex flex-col space-y-[19px]">
                      <span class="text-[14px]">
                        ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ
                        КРЕСЛО 6206A-2
                      </span>

                      <span class="text-[14px]">1 x 1 000 000 сум</span>
                    </div>
                  </div>

                  <div class="flex flex-col justify-between">
                    <button
                      class="text-[13px] text-orange font-firsNeueRegular"
                    >
                      ОСТАВИТЬ ОТЗЫВ
                    </button>

                    <span class="text-[14px]">1 000 000 сум</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- If Empty -->
          <ReusedSlotEmty
            v-show="isPaidOrdersEmpty"
            :image-src="require('@/assets/img/icons/empty-orders.svg')"
          >
            <template #header>
              <h1 class="text-[32px] font-medium">Ещё не успели заказать?</h1>
            </template>

            <template #description>
              <p class="text-gray text-[16px] max-w-[374px] text-center">
                У вас отсутствуют активные заказы! Воспользуйтесь поиском, чтобы
                найти всё что нужно.
              </p>
            </template>
          </ReusedSlotEmty>
        </div>

        <!-- Unpaid Orders -->
        <div v-if="activeTab === 'unpaid'">
          <!-- If Empty -->
          <ReusedSlotEmty
            v-show="isPaidUnpaidEmpty"
            :image-src="require('@/assets/img/icons/empty-orders.svg')"
          >
            <template #header>
              <h1 class="text-[32px] font-medium">Ещё не успели заказать?</h1>
            </template>

            <template #description>
              <p class="text-gray text-[16px] max-w-[374px] text-center">
                У вас отсутствуют активные заказы! Воспользуйтесь поиском, чтобы
                найти всё что нужно.
              </p>
            </template>
          </ReusedSlotEmty>
        </div>
      </div>
    </div>

    <!-- Cofirm Log Out Modal -->
    <ReusedSlotConfirm
      v-show="isModalLogOut"
      :title="'Хотите выйти из аккаунта?'"
      @closeModal="closeModal"
      @confirmOperation="logOutUser"
    />
  </div>
</template>

<script>
export default {
  name: 'OrdersPage',
  layout: 'UserLayout',
  middleware: 'auth',
  data() {
    return {
      activeTab: 'all',
      isModalOpen: false,
      isDropDownList: false,
      isPaidOrdersEmpty: false,
      isPaidUnpaidEmpty: true,
      activeName: 'orders',
      orderStatus: 'Доставлено',
      isModalLogOut: false,
      sortCategory: '',
      userData: {},
      sorts: [
        {
          value: 'Подешевле',
          label: 'Подешевле',
        },
        {
          value: 'Популярные',
          label: 'Популярные',
        },
        {
          value: 'Подороже',
          label: 'Подороже',
        },
        {
          value: 'Высокий рейтинг',
          label: 'Высокий рейтинг',
        },
        {
          value: 'Много заказов',
          label: 'Много заказов',
        },
        {
          value: 'Добавлены недавно',
          label: 'Добавлены недавно',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Мои Заказы',
    }
  },
  computed: {
    user() {
      return this.userData.user
    },
  },
  mounted() {
    this.fetchUser()
  },
  methods: {
    async fetchUser() {
      try {
        const response = await this.$axiosURL.get('/profile/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        })

        this.userData = response.data
        console.log('profile', this.user)
      } catch (error) {
        console.log(error)
      }
    },
    closeModal(val) {
      this.isModalLogOut = val
    },
    logOutUser() {},
    setActiveTab(tabName) {
      this.activeTab = tabName
    },
  },
}
</script>

<style scoped>
.product-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease-in-out;
}

.border-right {
  border-right: 1px solid #f2f2fa;
}
</style>
