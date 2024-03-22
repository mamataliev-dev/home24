<template>
  <div class="user-data-cont">
    <div class="flex flex-col items-center justify-center">
      <img :src="imageSrc" alt="" />

      <div class="flex flex-col items-center mt-[32px]">
        <slot name="header">
          <h1 class="text-[32px] font-medium">Default Header</h1>
        </slot>
        <slot name="description">
          <p class="text-gray text-[16px] max-w-[377px] text-center">
            Default description text.
          </p>
        </slot>
      </div>

      <nuxt-link
        class="border border-orange py-[16px] px-[126px] rounded-lg text-orange font-medium text-[16px] mt-[24px]"
        to="/"
        >На главную</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: '@/assets/img/icons/empty-compare.svg',
    },
  },
}
</script>
