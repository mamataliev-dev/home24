<template>
  <div>
    <div class="flex xl:space-x-[40px] 2xl:space-x-[60px]">
      <div class="flex items-center space-x-[16px]">
        <span class="text-gray text-[14px]">Сортировка</span>

        <el-select v-model="sortBy" placeholder="Подешевле">
          <el-option
            v-for="item in sorts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @onChange="$emit('sortCategory', item.value)"
          >
          </el-option>
        </el-select>
      </div>

      <div class="flex space-x-[18px]">
        <button @click="$emit('update-grid-layout', true), (isGridCol = true)">
          <ImgGridColums :is-active="isGridCol" />
        </button>

        <button
          @click="$emit('update-grid-layout', false), (isGridCol = false)"
        >
          <ImgGridRows :is-active="!isGridCol" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      sorts: [
        { value: 'cheap', label: 'Подешевле' },
        { value: 'popular', label: 'Популярные' },
        { value: 'expensive', label: 'Подороже' },
      ],
      isFiltered: false,
      categoryId: 0,
      isGridCol: true,
      sortBy: '',
      sortCategory: '',
      sortedCategories: [],
      sortedProducts: [],
    }
  },
}
</script>

<style>
.el-select .el-input.is-focus .el-input__inner {
  border: 1px solid #ff6418 !important;
}

.el-select .el-input__inner:focus {
  border: 1px solid #ff6418 !important;
}

.el-select-dropdown__item.selected {
  color: #ff6418 !important;
}

.el-select-dropdown__item {
  font-weight: light !important;
  font-style: 14px !important;
  color: #020105 !important;
}
</style>
