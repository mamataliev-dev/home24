<template>
  <div class="container mx-auto">
    <h1 class="main-title">Личный кабинет</h1>

    <div class="flex mt-[32px]">
      <!-- Left Side -->
      <div
        class="w-2/12 flex space-y-[32px] flex-col border-r border-[#F2F2FA]"
      >
        <nuxt-link to="/user/orders" class="profile-item-box">
          <img src="@/assets/img/icons/orders.svg" alt="" />
          <span class="text-gray text-[16px]">Мои заказы</span>
        </nuxt-link>

        <nuxt-link to="/user/settings" class="profile-item-box">
          <img src="@/assets/img/icons/profile-active.svg" alt="" />
          <span class="text-orange text-[16px]">Профиль</span>
        </nuxt-link>

        <div
          class="profile-item-box cursor-pointer"
          @click="isModalLogOut = true"
        >
          <img src="@/assets/img/icons/log-out.svg" alt="" />
          <span class="text-black text-[16px]">Выйти</span>
        </div>
      </div>

      <!-- Personal Datas -->
      <div
        v-show="!isEditing"
        class="flex justify-between w-10/12 pl-[24px] space-x-[24px]"
      >
        <div class="w-[666px] flex flex-col border border-[#F2F2FA] rounded-lg">
          <div
            class="flex justify-between items-center border-b border-[#F2F2FA] pl-[16px] pr-[12px] pb-[10px] pt-[10px]"
          >
            <h2 class="text-black text-[16px] font-medium">
              Персональные данные
            </h2>

            <button
              class="flex items-center justify-center space-x-[12px] py-[12px] px-[20px] rounded-lg border border-orange"
              @click="isEditing = true"
            >
              <img src="@/assets/img/icons/edit.svg" alt="" />

              <span class="text-[14px] font-medium text-orange">
                Изменить
              </span>
            </button>
          </div>

          <div class="flex justify-between space-x-[24px] px-[16px] py-[16px]">
            <div class="flex flex-col space-y-[40px]">
              <div class="profile-box">
                <span class="text-gray text-[14px]">Ф.И.О:</span>
                <span class="text-black text-[14px]">{{ userName }}</span>
              </div>

              <div class="profile-box">
                <span class="text-gray text-[14px]">E-mail:</span>
                <span class="text-black text-[14px]">{{ userEmail }}</span>
              </div>

              <div class="profile-box">
                <span class="text-gray text-[14px]">Пароль:</span>
                <span class="text-black text-[14px]">{{ userPassword }}</span>
              </div>
            </div>

            <div class="flex flex-col space-y-[40px]">
              <div class="profile-box">
                <span class="text-gray text-[14px]">Телефон:</span>
                <span class="text-black text-[14px]">{{ userPhone }}</span>
              </div>

              <div class="profile-box">
                <span class="text-gray text-[14px]">Адресс:</span>
                <span class="text-black text-[14px]">{{ userAddress }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[666px] flex flex-col border border-[#F2F2FA] rounded-lg">
          <div class="border-b border-[#F2F2FA]">
            <h2 class="text-black text-[16px] font-medium px-[24px] py-[24px]">
              Уведомления или новости
            </h2>
          </div>

          <div class="flex flex-col space-y-[24px] px-[24px] py-[24px]">
            <p class="text-gray text-[14px]">
              Получайте информацию об акциях и скидках
            </p>

            <div class="flex space-x-[18px]">
              <el-switch v-model="isNotifactions"></el-switch>
              <span class="text-black text-[14px]">через СМС</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Edit  Personal Datas-->
      <div v-show="isEditing" class="w-10/12 flex flex-col pl-[24px]">
        <div>
          <button
            class="flex items-center justify-center space-x-[12px] py-[12px] px-[20px] rounded-md bg-[#FFF3ED]"
            @click="isEditing = false"
          >
            <a-icon type="left" class="text-orange" />
            <span class="text-[14px] font-medium text-orange"> Назад </span>
          </button>
        </div>

        <div class="flex flex-col space-y-[48px] mt-[30px]">
          <div class="w-10/10 flex flex-col space-y-[24px]">
            <h2 class="text-[16px] text-black font-medium">Личные данные</h2>

            <form
              class="grid grid-cols-1 md:grid-cols-3 gap-[24px]"
              @submit.prevent="updateUsetData"
            >
              <div class="flex flex-col space-y-[6px]">
                <label for="name" class="font-medium text-gray text-[16px]"
                  >Ф.И.О</label
                >
                <el-input
                  v-model="newName"
                  placeholder="Ф.И.О"
                  clearable
                ></el-input>
              </div>

              <div class="flex flex-col space-y-[6px]">
                <label for="name" class="font-medium text-gray text-[16px]"
                  >Телефон</label
                >
                <el-input
                  v-model="newPhone"
                  type="number"
                  placeholder="+998 (--)--- -- --"
                  clearable
                ></el-input>
              </div>

              <div class="flex flex-col space-y-[6px]">
                <label for="name" class="font-medium text-gray text-[16px]"
                  >Email</label
                >
                <el-input
                  v-model="newEmail"
                  type="email"
                  placeholder="Email"
                  clearable
                ></el-input>
              </div>
            </form>
          </div>

          <div class="w-10/10 flex flex-col space-y-[24px] mt-[30px]">
            <h2 class="text-[16px] text-black font-medium">Адрес</h2>

            <form
              class="grid grid-cols-1 md:grid-cols-3 gap-[24px]"
              @submit.prevent="updateUsetData"
            >
              <div class="flex flex-col space-y-[6px]">
                <label for="name" class="font-medium text-gray text-[16px]"
                  >Область
                </label>

                <el-select
                  v-model="region"
                  placeholder="Область"
                  class="text-black"
                >
                  <el-option
                    v-for="item in regions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>

              <div class="flex flex-col space-y-[6px]">
                <label for="name" class="font-medium text-gray text-[16px]"
                  >Город / Район</label
                >
                <el-cascader
                  v-model="userCiteStreet"
                  :options="streets"
                  placeholder="Город / Район"
                  @change="onChangeCiteStreet"
                ></el-cascader>
              </div>

              <div class="flex flex-col space-y-[6px]">
                <label for="name" class="font-medium text-gray text-[16px]"
                  >Адрес</label
                >
                <el-input
                  v-model="newAddress"
                  placeholder="Адрес"
                  clearable
                ></el-input>
              </div>

              <div class="flex flex-col space-y-[6px]">
                <label for="name" class="font-medium text-gray text-[16px]"
                  >Индекс почты</label
                >
                <el-input
                  v-model="newEmailIndex"
                  placeholder="Индекс почты"
                  clearable
                ></el-input>
              </div>
            </form>
          </div>

          <div class="w-10/10 flex flex-col space-y-[24px] mt-[30px]">
            <h2 class="text-[16px] text-black font-medium">Пароль</h2>

            <form
              class="grid grid-cols-1 md:grid-cols-3 gap-[24px]"
              @submit.prevent="updateUsetData"
            >
              <div class="flex flex-col space-y-[6px]">
                <label for="name" class="font-medium text-gray text-[16px]"
                  >Пароль
                </label>

                <el-input
                  v-model="newPassword"
                  placeholder="Пароль"
                  show-password
                ></el-input>
              </div>

              <div class="flex flex-col space-y-[6px]">
                <label for="name" class="font-medium text-gray text-[16px]"
                  >Подтвердите пароль
                </label>

                <el-input
                  v-model="newPasswordConfirm"
                  placeholder="Подтвердите пароль"
                  show-password
                ></el-input>
              </div>
            </form>
          </div>
        </div>

        <div class="flex space-x-[32px] mt-[40px]">
          <button
            class="flex items-center justify-center bg-[#F8F8F8] rounded-md py-[14px] px-[64px]"
            @click="cancelUpdating"
          >
            Отменить
          </button>

          <button
            class="flex items-center justify-center bg-orange text-white rounded-md py-[14px] px-[64px]"
            @click="updateUsetData"
          >
            Сохранить
          </button>
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
  name: 'UserSettingsPage',
  layout: 'UserLayout',
  data() {
    return {
      isModalLogOut: false,
      activeName: 'orders',
      userName: 'Diyorbek',
      userEmail: 'info@home24.uz',
      userPassword: 'user-password',
      userPhone: '+998(93) 567 93 83',
      userAddress: '+998(93) 567 93 83',
      isNotifactions: false,
      isEditing: false,
      newEmail: '',
      newPhone: '',
      newName: '',
      newAddress: '',
      newEmailIndex: '',
      newPassword: '',
      newPasswordConfirm: '',
      userCiteStreet: '',
      region: '',
      regions: [
        {
          value: 'Андижанская',
          label: 'Андижанская',
        },
        {
          value: 'Бухарская',
          label: 'Бухарская',
        },
        {
          value: 'Джизакская',
          label: 'Джизакская',
        },
        {
          value: 'Кашкадарьинская',
          label: 'Кашкадарьинская',
        },
        {
          value: 'Наманганская',
          label: 'Наманганская',
        },
        {
          value: 'Навоийская',
          label: 'Навоийская',
        },
        {
          value: 'Самаркандская',
          label: 'Самаркандская',
        },
        {
          value: 'Сурхандарьинская',
          label: 'Сурхандарьинская',
        },
        {
          value: 'Сырдарьинская',
          label: 'Сырдарьинская',
        },
        {
          value: 'Ташкентская',
          label: 'Ташкентская',
        },
        {
          value: 'Ферганская',
          label: 'Ферганская',
        },
        {
          value: 'Хорезмская',
          label: 'Хорезмская',
        },
        {
          value: 'Республика Каракалпакстан',
          label: 'Республика Каракалпакстан',
        },
      ],
      streets: [
        {
          value: 'Ташкентская область',
          label: 'Ташкентская область',
          children: [
            { value: 'Чирчик', label: 'Чирчик' },
            { value: 'Ангрен', label: 'Ангрен' },
            { value: 'Восточный', label: 'Восточный' },
          ],
        },
        {
          value: 'Самаркандская область',
          label: 'Самаркандская область',
          children: [
            { value: 'Самарканд', label: 'Самарканд' },
            { value: 'Каттакурган', label: 'Каттакурган' },
          ],
        },
        {
          value: 'Ферганская область',
          label: 'Ферганская область',
          children: [
            { value: 'Фергана', label: 'Фергана' },
            { value: 'Коканд', label: 'Коканд' },
            { value: 'Андижан', label: 'Андижан' },
          ],
        },
        {
          value: 'Хорезмская область',
          label: 'Хорезмская область',
          children: [
            { value: 'Ургенч', label: 'Ургенч' },
            { value: 'Хива', label: 'Хива' },
          ],
        },
        {
          value: 'Бухарская область',
          label: 'Бухарская область',
          children: [
            { value: 'Бухара', label: 'Бухара' },
            { value: 'Гиждуван', label: 'Гиждуван' },
          ],
        },
        {
          value: 'Навоийская область',
          label: 'Навоийская область',
          children: [
            { value: 'Навои', label: 'Навои' },
            { value: 'Зарафшан', label: 'Зарафшан' },
          ],
        },
      ],
    }
  },
  head() {
    return {
      title: 'Настройки Личных данных',
    }
  },
  methods: {
    closeModal(val) {
      this.isModalLogOut = val
    },
    logOutUser() {},
    updateUsetData() {},
    onChangeRegion() {},
    onChangeCiteStreet() {},
    cancelUpdating() {
      this.userCiteStreet = ''
      this.isEditing = false
      this.newEmail = ''
      this.newPhone = ''
      this.newName = ''
      this.newAddress = ''
      this.newEmailIndex = ''
      this.newPassword = ''
      this.newPasswordConfirm = ''
      this.region = ''
    },
  },
}
</script>
