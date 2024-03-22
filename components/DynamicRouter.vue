<template>
  <div class="container mx-auto mt-[32px]">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">
        <span class="text-orange"> Главная </span>
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        :to="{ path: crumb.to }"
      >
        <span class="text-gray text-[16px]">
          {{ crumb.text }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'DynamicRouter',
  computed: {
    breadcrumbs() {
      const pathArray = this.$route.path.split('/').filter((p) => p)
      return pathArray.map((path, index) => {
        const text = path.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
        const to = '/' + pathArray.slice(0, index + 1).join('/')
        return { text, to }
      })
    },
  },
}
</script>
