<template>
  <div class="mt-[80px] xl:max-w-[900px] 2xl:max-w-[1219px]">
    <div v-html="desc"></div>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      required: true,
    },
  },
}
</script>
