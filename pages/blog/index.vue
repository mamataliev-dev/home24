<template>
  <div class="container mx-auto">
    <h1 class="main-title">Блог</h1>

    <div class="blog-grid user-data-cont">
      <div v-for="item in 10" :key="item" class="relative">
        <img
          class="w-[390px] h-[277px] rounded-lg"
          src="@/assets/img/jpg/blog-img.jpg"
          alt=""
        />

        <span
          class="text-[20px] text-white font-bold absolute bottom-[24px] left-[24px]"
          >Поздравляем с ”8 марта” любимых женщин</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  head() {
    return {
      title: 'Блог',
    }
  },
}
</script>
