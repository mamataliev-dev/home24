<template>
  <div>
    <div class="container mx-auto">
      <SlotEmty :image-src="require('@/assets/img/icons/404.svg')">
        <template #header>
          <h1 class="text-[32px] font-medium">Страница не найдена!</h1>
        </template>

        <template #description>
          <p class="text-gray text-[16px] max-w-[374px] text-center">
            Не переживайте и продолжайте покупку
          </p>
        </template>
      </SlotEmty>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  title: 'Ничего не найдено',
}
</script>
