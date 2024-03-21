<template>
  <div class="container mx-auto conponent-margin-top">
    <h1 class="title">Категории</h1>

    <div class="main-grid">
      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/fridge.png" alt="" />
        <span>Бытовая техника</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/furniture.png" alt="" />
        <span>Мебель</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/prices.png" alt="" />
        <span>Подарки</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/fabrics.png" alt="" />
        <span>Текстиль</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/dishes.png" alt="" />
        <span>Посуда</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/bath.png" alt="" />
        <span>Сантехника</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/building.png" alt="" />
        <span>Стройматериалы</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/school.png" alt="" />
        <span>Канцтовары</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/children.png" alt="" />
        <span>Игрушки</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/tech.png" alt="" />
        <span>Аксессуары</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/parfum.png" alt="" />
        <span>Парфумерия</span>
      </div>

      <div @click="getChosenCategory(val)" class="category-grid-item">
        <img src="@/assets/img/png/discount.png" alt="" />
        <span>Акции</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCategories',
  methods: {
    getChosenCategory(val) {
      console.log(val)
    },
  },
}
</script>
