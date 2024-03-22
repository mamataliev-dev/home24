<template>
  <div class="container mx-auto">
    <h1 class="main-title">Мои Заказы</h1>

    <div class="flex justify-between mt-[32px]">
      <div
        class="w-2/12 flex space-y-[32px] flex-col border-r border-[#F2F2FA]"
      >
        <nuxt-link to="/user/orders" class="profile-item-box">
          <img src="@/assets/img/icons/orders-active.svg" alt="" />
          <span class="text-orange text-[16px]">Мои заказы</span>
        </nuxt-link>

        <nuxt-link to="/user/settings" class="profile-item-box">
          <img src="@/assets/img/icons/profile.svg" alt="" />
          <span class="text-black text-[16px]">Профиль</span>
        </nuxt-link>

        <div class="profile-item-box cursor-pointer" @click="logOut">
          <img src="@/assets/img/icons/log-out.svg" alt="" />
          <span class="text-black text-[16px]">Выйти</span>
        </div>
      </div>

      <div class="w-10/12 pl-[24px]">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Все заказы" name="orders">
            <ReusedSlotEmty
              v-show="true"
              :image-src="require('@/assets/img/icons/empty-orders.svg')"
            >
              <template #header>
                <h1 class="text-[32px] font-medium">Ещё не успели заказать?</h1>
              </template>

              <template #description>
                <p class="text-gray text-[16px] max-w-[374px] text-center">
                  У вас отсутствуют активные заказы! Воспользуйтесь поиском,
                  чтобы найти всё что нужно.
                </p>
              </template>
            </ReusedSlotEmty>
          </el-tab-pane>

          <el-tab-pane label="Неоплаченные" name="unpaid">
            <ReusedSlotEmty
              v-show="true"
              :image-src="require('@/assets/img/icons/empty-orders.svg')"
            >
              <template #header>
                <h1 class="text-[32px] font-medium">Ещё не успели заказать?</h1>
              </template>

              <template #description>
                <p class="text-gray text-[16px] max-w-[374px] text-center">
                  У вас отсутствуют активные заказы! Воспользуйтесь поиском,
                  чтобы найти всё что нужно.
                </p>
              </template>
            </ReusedSlotEmty>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrdersPage',
  layout: 'UserLayout',
  data() {
    return {
      activeName: 'orders',
    }
  },
  head() {
    return {
      title: 'Мои Заказы',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    logOut() {},
  },
}
</script>

<style scoped>
.border-right {
  border-right: 1px solid #f2f2fa;
}
</style>
