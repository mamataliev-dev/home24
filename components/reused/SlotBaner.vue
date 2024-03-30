<template>
  <div class="container mx-auto conponent-margin-top">
    <div v-show="!isBlog" class="flex items-end space-x-[24px]">
      <h1 class="title-temp">Блог</h1>
      <nuxt-link to="/blog" class="text-orange text-[20px] underline mb-[8px]"
        >Все блоги</nuxt-link
      >
    </div>

    <h1 v-show="isBlog" class="main-title">Другие блоги</h1>

    <div class="blog-grid mt-[24px]">
      <div v-for="item in posts?.slice(0, 4)" :key="item.id" class="relative">
        <nuxt-link :to="`/blog/${item.slug}`">
          <div class="flex items-center justify-center bg-gray-200">
            <img
              class="block w-[390px] h-[277px] rounded-lg"
              :src="item.lg_img || require('@/assets/img/jpg/empty-brand.jpg')"
              alt=""
            />
          </div>

          <span
            class="text-[20px] text-white font-bold absolute bottom-[24px] left-[24px]"
            >{{ item.title }}</span
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
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch('fetchPosts')
    },
  },
}
</script>
