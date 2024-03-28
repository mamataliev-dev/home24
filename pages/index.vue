<template>
  <LoadingModal v-show="loading" />
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'MainLayout',
  head() {
    return {
      title: 'Home 24',
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
  },
}
</script>
