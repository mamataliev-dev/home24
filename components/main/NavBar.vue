<template>
  <div class="">
    <nav class="bg-[#F4F5F5] mb-[20px]">
      <div class="container mx-auto">
        <div class="bg-[#F4F5F5] p-[8px] flex justify-between">
          <ul>
            <li class="flex items-center space-x-3">
              <div class="flex items-center space-x-1">
                <img src="@/assets/img/location.svg" alt="" />
                <span class="text-gray">Город:</span>
              </div>
              <span class="text-black underline">Ташкент</span>
            </li>
          </ul>

          <ul class="flex space-x-[48px]">
            <li class="nav-item">
              <div class="nav-item">
                <img src="@/assets/img/location.svg" alt="" />
                <a href="https://www.instagram.com/" class="text-gray"
                  >home24.uz</a
                >
              </div>
            </li>

            <li class="nav-item">
              <div class="nav-item">
                <img src="@/assets/img/location.svg" alt="" />
                <a href="https://web.telegram.org/a/" class="text-gray"
                  >t.me/home24uz</a
                >
              </div>
            </li>

            <li>
              <a href="tel:+998 71 200 7 002" class="text-orange font-bold"
                >+998 71 200 7 002</a
              >
            </li>

            <li class="nav-item cursor-pointer" @click="openDropDownList">
              <div class="nav-item">
                <span class="text-gray">Рус </span>
                <img src="@/assets/img/arrow-down.svg" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nav class="container mx-auto mb-[20px]">
      <ul class="flex items-center w-auto">
        <li>
          <nuxt-link to="/">
            <img src="@/assets/img/logo.svg" alt="" />
          </nuxt-link>
        </li>

        <li
          class="burger flex items-center justify-center px-[18px] xl:pr-[30px] py-[10px] h-[44px] bg-customBg ml-[44px] mr-[38px] rounded-md cursor-pointer"
          @click="toggleMenu"
        >
          <div class="flex flex-col space-y-1 cursor-pointer">
            <div
              :class="menuOpen ? 'transform rotate-45 translate-y-1.5' : ''"
              class="w-4 h-0.5 bg-[#FF6418] transition-all duration-200"
            ></div>
            <div
              :class="menuOpen ? 'opacity-0' : ''"
              class="w-4 h-0.5 bg-[#FF6418] transition-all duration-200"
            ></div>
            <div
              :class="menuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''"
              class="w-4 h-0.5 bg-[#FF6418] transition-all duration-200"
            ></div>
          </div>

          <span class="text-lg text-orange ml-2">Каталог</span>
        </li>

        <li class="mr-[38px]">
          <form class="flex" @submit.prevent="searchQuery">
            <input
              v-model="query"
              class="w-[400px] px-[16px] py-[8px] h-[44px] border border-[#F8F8F8] rounded-l-md focus:outline-orange"
              type="text"
              placeholder="Искать"
            />
            <button
              class="h-[44px] px-[44px] py-[11px] bg-[#EBEBEB] rounded-r-md"
              @click="searchQuery"
            >
              <img src="@/assets/img/search.svg" alt="" />
            </button>
          </form>
        </li>

        <li class="flex items-center space-x-[40px]">
          <nuxt-link class="nav-item" to="/compare">
            <img src="@/assets/img/comparison.svg" alt="" />
            <span>Сравнение</span>
          </nuxt-link>

          <nuxt-link class="nav-item" to="/favourites">
            <img src="@/assets/img/like.svg" alt="" />
            <span>Избранное</span>
          </nuxt-link>

          <div class="nav-item relative cursor-pointer" @click="isModal = true">
            <ImgBagImg />
            <span>Корзина</span>
          </div>

          <!-- Drop Down Orders List -->
          <div
            v-show="openOrdersModal"
            class="w-[552px] absolute top-[100px] right-[145px] z-50 flex flex-col space-y-[30px] bg-white px-[24px] pt-[24px] pb-[32px] rounded-lg shadow-lg"
          >
            <div class="flex flex-col space-y-[16px]">
              <div
                v-for="item in 3"
                :key="item"
                class="flex justify-between items-center"
              >
                <div class="flex items-center space-x-[24px]">
                  <img
                    class="w-[58px] h-[66px] border border-[#F2F2F2] rounded-lg"
                    src="@/assets/img/jpg/test-image.jpg"
                    alt=""
                  />

                  <div class="flex flex-col space-y-[4px]">
                    <span class="text-[14px]"
                      >Офисное кресло CM-F55AS(Muller)</span
                    >
                    <span class="text-[14px]">1 000 000 сум</span>
                  </div>
                </div>

                <button>
                  <img src="@/assets/img/icons/trash-gray.svg" alt="" />
                </button>
              </div>
            </div>

            <nuxt-link
              to="/cart/order"
              class="text-white text-[20px] font-medium bg-orange py-[17px] rounded-lg flex items-center justify-center"
            >
              Перейти к оформлению
            </nuxt-link>
          </div>

          <nuxt-link class="nav-item" to="/user/orders">
            <img src="@/assets/img/profile.svg" alt="" />
            <span>Войти</span>
          </nuxt-link>

          <!-- Confirm Modal -->
          <ReusedSlotConfirmUser
            v-show="false"
            :title="modalTitle"
            :is-log-in="isLogIn"
            :error-msg="errorMsg"
            @closeModal="closeModal"
            @submit="check"
            @sendCodeAgain="sendCodeAgain"
            @confirmCode="register"
          />
        </li>
      </ul>
    </nav>

    <div class="flex justify-between container mx-auto mb-[20px]">
      <div v-for="item in categories.slice(0, 9)" :key="item.id">
        <span
          class="text-gray cursor-pointer"
          @click="$router.push(`/category/${item.slug}`)"
          >{{ item.name }}</span
        >
      </div>

      <div class="nav-item" @click="menuOpen = true">
        <span class="text-orange">Ещё</span>
        <img src="@/assets/img/arrow-down-orange.svg" alt="" />
      </div>

      <!-- All Categories Modal -->
      <div
        v-show="menuOpen"
        class="absolute top-[129px] left-0 z-50 w-full h-full bg-white shadow-2xl"
      >
        <div class="container mx-auto grid grid-cols-12">
          <div
            class="col-span-2 flex flex-col space-y-[40px] border-r border-[#F2F2FA] py-[20px]"
          >
            <span
              v-for="(item, index) in categories"
              :key="item.id"
              class="text-gray text-[18px] hover:text-orange focus:text-orange cursor-pointer"
              @click=";(activeCategory = item.name), (indexed = index)"
            >
              {{ item.name }}
            </span>
          </div>

          <div class="col-span-10 ml-[24px] py-[20px]">
            <h1 class="text-orange text-[32px] font-firsNeueMedium">
              {{ activeCategory }}
            </h1>

            <div class="grid grid-cols-4 grid-rows-2 gap-y-[48px] mt-[24px]">
              <!-- children -->
              <div
                v-for="elem in categories[indexed]?.children"
                :key="elem.id"
                class="flex flex-col space-y-[24px]"
              >
                <!-- children name -->
                <h2 class="text-[18px] font-medium">{{ elem.name }}</h2>

                <!-- sub children -->
                <ul
                  v-for="ij in elem.children"
                  :key="ij.id"
                  class="flex flex-col space-y-[16px]"
                >
                  <!-- sub children name -->
                  <li
                    class="text-[14px] cursor-pointer"
                    @click="$router.push(`category/${ij.slug}`)"
                  >
                    -{{ ij.name }}
                  </li>
                </ul>

                <div
                  v-if="elem.children.length > 5"
                  class="flex items-center space-x-[10px] cursor-pointer"
                >
                  <span class="text-gray text-[14px]">Ещё 6</span>
                  <span class="el-icon-arrow-up text-[15px] text-gray"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarComponent',
  data() {
    return {
      query: '',
      openOrdersModal: false,
      modalTitle: 'Войти или создать профиль',
      isModal: false,
      isLogIn: false,
      cleanPhoneNumber: '',
      errorMsg: '',
      menuOpen: false,
      activeCategory: 'Мебель',
      indexed: 0,
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
  },
  mounted() {
    console.log('caregories', this.categories[0].children)
  },
  methods: {
    openDropDownList() {},
    searchQuery() {},
    closeModal(val) {
      this.isModal = val
    },
    async check(phoneNumber) {
      try {
        this.cleanPhoneNumber = phoneNumber.replace(/\D/g, '')

        const response = await this.$axios.$post(
          'https://e-shop.ndc.uz/api/auth/check',
          {
            phone_number: this.cleanPhoneNumber,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        console.log('Login Successful:', response)

        if (response.authorized === 0) {
          this.isLogIn = true
        }
      } catch (error) {
        console.error('Login Error:', error)
      }
    },
    async register(code) {
      try {
        const response = await this.$axios.$post(
          'https://e-shop.ndc.uz/api/auth/register',
          {
            phone_number: this.cleanPhoneNumber,
            sms_code: code,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        console.log('Registration/Login Successful:', response)

        if (response.message === 'Код неверный') {
          this.errorMsg = 'Смс код пользователя неверны'
        }
      } catch (error) {
        console.error(
          'Registration/Login Error:',
          error.response ? error.response.data : error
        )
      }
    },
    sendCodeAgain() {},
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style>
.burger {
  background-color: rgba(255, 100, 24, 0.08);
}
</style>
