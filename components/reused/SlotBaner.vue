<template>
  <div class="container mx-auto conponent-margin-top">
    <div v-show="!isBlog" class="flex items-end space-x-[24px]">
      <h1 class="title-temp">Блог</h1>
      <nuxt-link to="/blog" class="text-orange text-[20px] underline"
        >Все блоги</nuxt-link
      >
    </div>

    <h1 v-show="isBlog" class="main-title">Другие блоги</h1>

    <div class="blog-grid mt-[24px]">
      <div v-for="item in 4" :key="item" class="relative">
        <nuxt-link to="/blog/id">
          <img
            class="w-[390px] h-[277px] rounded-lg"
            src="@/assets/img/jpg/blog-img.jpg"
            alt=""
          />

          <span
            class="text-[20px] text-white font-bold absolute bottom-[24px] left-[24px]"
            >Поздравляем с ”8 марта” любимых женщин</span
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherBlogsComponent',
  props: {
    isBlog: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
