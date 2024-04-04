<template>
  <div class="container mx-auto">
    <h1 class="main-title">Блог</h1>

    <div class="blog-grid user-data-cont">
      <div v-for="item in posts" :key="item.id" class="relative">
        <nuxt-link :to="`/blog/${item.slug}`">
          <img
            class="w-[390px] h-[277px] rounded-lg"
            :src="item.lg_img || require('@/assets/img/jpg/empty-brand.jpg')"
            alt=""
          />

          <span
            class="text-[20px] text-white font-bold absolute bottom-[24px] left-[24px]"
            >{{ item.title }}</span
          >
        </nuxt-link>
      </div>
    </div>

    <div class="mt-[32px]">
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="postData.posts.total"
      >
      </el-pagination>



    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $axiosURL, store }) {
    try {
      const response = await $axiosURL.get('/posts')
      const posts = response.data.posts.data

      return { posts, postData: response.data }
    } catch (error) {
      console.error('Error fetching:', error)
    }

    await store.dispatch('fetchBanners')
    await store.dispatch('fetchBlogs')
  },
  data() {
    return {
      blogId: 1,
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

.el-pager li {
  padding: 14px 24px !important;
  background: #ff6418 !important;
}

.number {
  padding: 14px 24px !important;
  background: #ff6418 !important;
}
</style>
