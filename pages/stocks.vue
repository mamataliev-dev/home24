<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ $axiosURL }) {
    try {
      const response = await $axiosURL.get(`/promotions`)
      console.log(response.data.promotions.data)
      return { promotions: response.data.promotions.data }
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Акции',
    }
  },
  methods: {
    getChosenCategory() {},
  },
}
</script>
