<template>
  <div>
    <AdBanner />
    <ProductsProductCategories />
    <ProductsTopProducts />
    <AppStocks />
    <ProductsPopularProducts />
    <ProductsPopularBrands />
    <FeedbackImgs :feedbacks="feedbacks" />
    <ProductsTodayProducts />
    <AppAdvertising />
    <ReusedSlotBlogs />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'MainLayout',
  async asyncData({ store, $axiosURL }) {
    await store.dispatch('fetchPosts')
    await store.dispatch('fetchBrands')
    await store.dispatch('fetchBanners')
    await store.dispatch('fetchCategories')
    await store.dispatch('fetchShowcases')
    await store.dispatch('fetchCategories')

    // Fetch Feedbacks
    try {
      const response = await $axiosURL.get(`/feedbacks`)
      const feedbacks = response.data.feedbacks.data
      return { feedbacks }
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },
  head() {
    return {
      title: 'Home 24',
    }
  },
}
</script>
