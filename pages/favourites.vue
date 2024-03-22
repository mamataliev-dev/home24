<template>
  <div class="container mx-auto">
    <h1 class="main-title">Избранное</h1>

    <ReusedSlotEmty :image-src="require('@/assets/img/icons/empty-favourites.svg')">
      <template #header>
        <h1 class="text-[32px] font-medium">В избранном пока ничего нет</h1>
      </template>

      <template #description>
        <p class="text-gray text-[16px] max-w-[374px] text-center">
          Вы можете добавлять товары кликая на сердечко, которое ноходится прямо
          на карточке товара
        </p>
      </template>
    </ReusedSlotEmty>
  </div>
</template>

<script>
export default {
  name: 'FavouritesPage',
  layout: 'UserDataLayout',
}
</script>
