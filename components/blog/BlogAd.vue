<template>
  <div class="flex flex-col space-x-[35px]">
    <h1 class="main-title">Реклама</h1>

    <div v-for="item in 3" :key="item">
      <img class="rounded-lg" src="@/assets/img/jpg/blog-ad.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
