<template>
  <div class="container mx-auto">
    <DynamicRouter />
    <h1 class="main-title">Блог</h1>

    <div class="flex space-x-[74px] mt-[32px]">
      <div class="w-full md:w-9/12">
        <div class="flex flex-col space-y-[24px]">
          <div class="flex flex-col">
            <h1 class="text-[32px] font-medium">{{ post.title }}</h1>
            <span class="text-[16px] text-gray">{{ convertedPostData }}</span>
          </div>

          <div class="text-[18px] text-gray" v-html="post.desc"></div>
        </div>
      </div>

      <div class="w-full md:w-3/12">
        <AdBlog />
      </div>
    </div>

    <ReusedSlotBlogs :is-blog="true" />
  </div>
</template>

<script>
export default {
  name: 'BlogId',
  async asyncData({ $axiosURL, params, store }) {
    try {
      const response = await $axiosURL.get(`/posts/${params.id}`)
      const post = response.data.post
      return { post }
    } catch (error) {
      console.error('Error fetching:', error)
    }

    await store.dispatch('fetchBanners')
    await store.dispatch('fetchBlogs')
  },
  data() {
    return {}
  },
  head() {
    return {
      title: `Блог | ${this.post.title || 'Блог'}`,
    }
  },
  computed: {
    convertedPostData() {
      const createdAt = this.post.created_at
      return new Date(createdAt).toLocaleDateString('ru-RU', {
        month: 'long',
        day: 'numeric',
      })
    },
  },
}
</script>
