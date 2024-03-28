<template>
  <div class="flex flex-col space-y-[35px]">
    <h1 class="text-[40px] text-black font-medium">Реклама</h1>

    <div
      v-for="item in banners"
      :key="item.id"
      class="flex flex-col space-y-[24px] cursor-pointer"
      @click="$router.push('/stocks')"
    >
      <img
        class="rounded-lg w-[390px]"
        :src="item.lg_m_img || require('@/assets/img/jpg/empty-brand.jpg')"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    banners() {
      return this.$store.state.banners.filter((b) => b.type === 'type2')
    },
  },
  mounted() {
    this.fetchBanners()
  },
  methods: {
    getProduct(val) {
      console.log(val)
    },
    fetchBanners() {
      this.$store.dispatch('fetchBanners')
    },
  },
}
</script>
