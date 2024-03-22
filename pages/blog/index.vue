<template>
  <div class="container mx-auto">
    <h1 class="main-title">Блог</h1>

    <div class="blog-grid user-data-cont">
      <div v-for="item in 10" :key="item" class="relative">
        <nuxt-link :to="`/blog/${blogId}`">
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

    <div class="mt-[32px]">
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      blogId: 1,
      // currentPage1: 5,
      // currentPage2: 5,
      // currentPage3: 5,
      // currentPage4: 4,
    }
  },
  head() {
    return {
      title: 'Блог',
    }
  },
}
</script>

<style scoped>
.el-pager li.active {
  background: #ff6418 !important;
  color: white;
  border-radius: 50%;
  padding: 14px 24px 14px 24px;
}
</style>
