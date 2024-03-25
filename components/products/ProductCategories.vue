<template>
  <div class="container mx-auto conponent-margin-top">
    <h1 class="title">Категории</h1>

    <div class="main-grid">
      <div
        v-for="item in 12"
        :key="item"
        class="category-grid-item"
        @click="$router.push(`/category/furniture`)"
      >
        <img src="@/assets/img/png/fridge.png" alt="" />
        <span class="font-firsNeueRegular text-[20px] text-center"
          >Бытовая техника</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCategories',
  methods: {},
}
</script>
