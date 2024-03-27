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

      <div class="w-10/12 pl-[38px]">
        <DynamicRouter />
        <h1 class="main-title">Мебель</h1>

        <div class="category-id-grid mt-[32px]">
          <div
            v-for="item in 12"
            :key="item"
            class="category-grid-item"
            @click="$router.push(`/category/furniture/office-furniture`)"
          >
            <img src="@/assets/img/png/fridge.png" alt="" />
            <span class="font-firsNeueRegular text-[20px] text-center"
              >Бытовая техника</span
            >
          </div>
        </div>
      </div>
    </div>

    <ProductsTopProducts />
    <CategoryInfo />
  </div>
</template>

<script>
export default {
  layout: 'BrandCategoryLayout',
}
</script>
