<template>
  <div class="container mx-auto">
    <div class="bg-[#F4F5F5]">
      <div>
        <h1 class="main-title">Корзина</h1>
        <span>Товаров: 5</span>
      </div>

      <ReusedSlotEmty :image-src="require('@/assets/img/icons/empty-cart.svg')">
        <template #header>
          <h1 class="text-[32px] font-medium">В корзине пока нет товаров</h1>
        </template>

        <template #description>
          <p class="text-gray text-[16px] max-w-[374px] text-center">
            Но вы всегда можете ее наполнить
          </p>
        </template>
      </ReusedSlotEmty>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCart',
  layout: 'CartLayout',
  head() {
    return {
      title: 'Корзина',
    }
  },
}
</script>
