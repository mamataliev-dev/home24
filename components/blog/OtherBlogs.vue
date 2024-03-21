<template>
  <div class="container mx-auto conponent-margin-top">
    <h1 class="main-title">Другие блоги</h1>

    <div class="blog-grid mt-[24px]">
      <div v-for="item in 4" :key="item" class="relative">
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
  name: 'OtherBlogsComponent',
}
</script>
