<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="flex items-end space-x-[24px] mb-[24px]">
      <h1 class="title-temp">Популярные бренды</h1>
      <nuxt-link to="/" class="text-orange text-[20px] underline"
        >Смотреть все</nuxt-link
      >
    </div>

    <div class="main-grid">
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
      <div @click="getBrand(val)" class="brand-grid-item">
        <img src="@/assets/img/png/apple-logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularBrends',
  methods: {
    getBrand(val) {
      console.log(val)
    },
  },
}
</script>
