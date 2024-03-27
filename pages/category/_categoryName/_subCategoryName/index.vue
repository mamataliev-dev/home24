<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="flex flex-col space-y-[40px] w-2/12 mt-[32px]">
        <!-- Categories -->
        <div class="category-box">
          <h1 class="category-title">Категории</h1>

          <ul class="flex flex-col space-y-[12px]">
            <li v-for="item in 7" :key="item">
              <button class="hover:text-orange">Офисная мебель</button>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-10/12 flex flex-col pl-[38px]">
        <DynamicRouter />
        <h1 class="main-title">Оффисная мебель</h1>

        <div class="category-item-grid mt-[32px]">
          <ProductsBaseProduct
            v-for="item in 6"
            :key="item"
            @click.native="
              $router.push(`/category/furniture/office-furniture/chairs`)
            "
          />
        </div>

        <CategoryInfo />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'BrandCategoryLayout',
  methods: {
    getProduct(item) {},
  },
}
</script>
