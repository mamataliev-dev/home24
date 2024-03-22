<template>
  <div>
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
          class="flex items-center px-[18px] py-[10px] h-[44px] border border-orange ml-[44px] mr-[38px] rounded-md"
        >
          <img src="@/assets/img/burger-menu.svg" alt="" />
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
            <span class="">Сравнение</span>
          </nuxt-link>

          <nuxt-link class="nav-item" to="/favourites">
            <img src="@/assets/img/like.svg" alt="" />
            <span class="">Избранное</span>
          </nuxt-link>

          <nuxt-link class="nav-item" to="/cart">
            <img src="@/assets/img/bag.svg" alt="" />
            <span class="">Корзина</span>
          </nuxt-link>

          <nuxt-link class="nav-item" to="/user/orders">
            <img src="@/assets/img/profile.svg" alt="" />
            <span class="">Diyorbek</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="flex justify-between container mx-auto mb-[20px]">
      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/crown.svg" alt="" />
        <span class="text-gray">Подарки</span>
      </nuxt-link>

      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/furniture.svg" alt="" />
        <span class="text-gray">Мебель</span>
      </nuxt-link>

      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/appliances.svg" alt="" />
        <span class="text-gray">Техника</span>
      </nuxt-link>

      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/dishes.svg" alt="" />
        <span class="text-gray">Текстиль</span>
      </nuxt-link>

      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/dishes.svg" alt="" />
        <span class="text-gray">Посуда</span>
      </nuxt-link>

      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/plumbing.svg" alt="" />
        <span class="text-gray">Сантехника</span>
      </nuxt-link>

      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/building.svg" alt="" />
        <span class="text-gray">Стройматириалы</span>
      </nuxt-link>

      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/products.svg" alt="" />
        <span class="text-gray">Канцтовары</span>
      </nuxt-link>

      <nuxt-link class="nav-item" to="/">
        <img src="@/assets/img/stocks.svg" alt="" />
        <span class="text-gray">Акции</span>
      </nuxt-link>

      <nuxt-link class="nav-item" to="/">
        <span class="text-orange">Ещё</span>
        <img src="@/assets/img/arrow-down-orange.svg" alt="" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarComponent',
  data() {
    return {
      query: '',
    }
  },
  methods: {
    openDropDownList() {},
    searchQuery() {},
  },
}
</script>
