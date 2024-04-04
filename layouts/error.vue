<template>
  <div class="container mx-auto">
    <ReusedSlotEmty :image-src="require('@/assets/img/icons/404.svg')">
      <template #header>
        <h1 class="text-[32px] font-medium">Страница не найдена!</h1>
      </template>

      <template #description>
        <p class="text-gray text-[16px] max-w-[374px] text-center">
          Не переживайте и продолжайте покупку
        </p>
      </template>
    </ReusedSlotEmty>
  </div>
</template>
SlotEmty
<script>
export default {
  name: 'ErrorPage',
  head() {
    return {
      title: 'Ничего не найдено',
    }
  },
}
</script>
