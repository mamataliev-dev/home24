<template>
  <div class="container mx-auto">
    <h1 class="main-title">Список сравнения</h1>

    <SlotEmty :image-src="require('@/assets/img/icons/empty-compare.svg')">
      <template #header>
        <h1 class="text-[32px] font-medium">Сравнивать пока нечего</h1>
      </template>

      <template #description>
        <p class="text-gray text-[16px] max-w-[374px] text-center">
          Добавляйте товары к сравнению характеристики выбирайте самый
          подходящий вам товар
        </p>
      </template>
    </SlotEmty>
  </div>
</template>

<script>
export default {
  name: 'ComparePage',
  layout: 'UserDataLayout',
  head() {
    return {
      title: 'Сравнение',
    }
  },
}
</script>
