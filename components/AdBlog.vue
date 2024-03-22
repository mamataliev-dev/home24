<template>
  <div class="flex flex-col space-y-[35px]">
    <h1 class="text-[40px] text-black font-medium">Реклама</h1>

    <div class="flex flex-col space-y-[24px]" v-for="item in 3" :key="item">
      <img class="rounded-lg" src="@/assets/img/jpg/blog-ad.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
