<template>
  <div
    class="container mx-auto mt-[120px] pt-[80px] pb-[40px] conponent-margin-top"
  >
    <div class="flex justify-between pb-[32px] border-b border-[#EBEBEB]">
      <div class="flex flex-col">
        <h1 class="footer-title">Информация</h1>

        <ul class="footer-link-box">
          <li class="footer-link">
            <nuxt-link to="/">О компании</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">Наши партнеры</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">Блог</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">О наших акциях и скидках</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">Пользовательское соглашение</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="flex flex-col">
        <h1 class="footer-title">Поддержка и сервис</h1>

        <ul class="footer-link-box">
          <li class="footer-link">
            <nuxt-link to="/">Вопросы и ответы</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">Отзывы</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">Контакты</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">Для партнеров</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="flex flex-col">
        <h1 class="footer-title">Мой профиль</h1>

        <ul class="footer-link-box">
          <li class="footer-link">
            <nuxt-link to="/">Личный кабинет</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">Избранные товары</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">Список сравнения</nuxt-link>
          </li>

          <li class="footer-link">
            <nuxt-link to="/">Мои заказы</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="flex flex-col">
        <h1 class="footer-title">Контакты</h1>

        <ul class="footer-link-box">
          <li class="footer-link">
            <a href="tel:+998 (71) 200-7-002">Телефон: +998 (71) 200-7-002</a>
          </li>

          <li class="footer-link">
            <span>Ташкент, ул. Коратош, 106</span>
          </li>

          <div class="flex items-center space-x-[24px] mt-14 footer-qr">
            <img src="@/assets/img/png/footer-qr.png" alt="" />
            <p
              class="max-w-[246px] text-[18px] text-[#9A999B] font-firsNeueRegular"
            >
              Наведите камеру на QR-код, чтобы найти местоположение
            </p>
          </div>
        </ul>
      </div>
    </div>

    <div class="flex justify-between pt-[40px]">
      <div class="flex flex-col space-y-[32px]">
        <div class="flex items-center space-x-[24px]">
          <nuxt-link to="/">
            <img src="@/assets/img/instagram.svg" alt="" />
          </nuxt-link>

          <nuxt-link to="/">
            <img src="@/assets/img/telegram.svg" alt="" />
          </nuxt-link>

          <nuxt-link to="/">
            <img src="@/assets/img/facebook.svg" alt="" />
          </nuxt-link>
        </div>

        <span class="text-gray text-[18px]"
          >© 2022 ООО «Интернет магазин «Home24».</span
        >
      </div>

      <div class="flex items-center space-x-[40px]">
        <span class="text-[#020105] text-[18px]">Мобильное приложение:</span>

        <div class="flex space-x-[24px]">
          <nuxt-link to="/">
            <img src="@/assets/img/ios.svg" alt="" />
          </nuxt-link>

          <nuxt-link to="/">
            <img src="@/assets/img/android.svg" alt="" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
.footer-qr {
  margin-top: 56px !important;
}
</style>
