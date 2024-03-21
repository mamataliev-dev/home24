<template>
  <div class="container mx-auto mt-[32px]">
    <ul class="flex space-x-[8px]">
      <li class="text-orange text-[16px]">
        <nuxt-link to="/">Главная</nuxt-link>
      </li>

      <li class="text-gray text-[16px]">
        <span>></span>
      </li>

      <li class="text-gray text-[16px]">
        <nuxt-link to="/">Сравнение</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DynamicRouter',
}
</script>
