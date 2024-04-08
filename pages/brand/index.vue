<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between">
      <div class="flex flex-col space-y-[16px]">
        <h1 class="main-title">Популярные бренды</h1>

        <div class="flex space-x-[24px]">
          <button
            :class="
              activeButton === null
                ? 'border-b border-orange leading-[24px]'
                : 'text-gray'
            "
            class="text-orange text-[16px] w-auto border-b border-orange leading-[24px] font-firsNeueRegular"
            @click="getAllBrands"
          >
            Все бренды
          </button>

          <div class="flex space-x-[8px]">
            <button
              v-for="(item, index) in isEnAlphabet ? enAlphabet : ruAlphabet"
              v-show="!isNumeric"
              :key="item"
              :class="{ active: activeButton === index }"
              class="filter-btn hover:text-orange focus:text-orange"
              @click="sortByLetter(item)"
            >
              {{ item }}
            </button>

            <button
              v-for="(item, index) in numbersList"
              v-show="isNumeric"
              :key="item"
              :class="{ active: activeButton === index }"
              class="filter-btn hover:text-orange focus:text-orange"
              @click="sortByLetter"
            >
              {{ item }}
            </button>
          </div>

          <button
            class="font-medium"
            @click=";(isEnAlphabet = !isEnAlphabet), (isNumeric = false)"
          >
            {{ isEnAlphabet ? 'А-Я' : 'A-Z' }}
          </button>

          <button class="font-medium" @click="isNumeric = true">123</button>
        </div>
      </div>

      <div class="flex items-center space-x-[40px]">
        <div class="flex">
          <input
            v-model="searchQuery"
            placeholder="Искать"
            type="text"
            class="xl:w-[300px] 2xl:w-[400px] border border-[#EBEBEB] py-[8px] px-[16px] rounded-tl-lg rounded-bl-lg"
            @input=";(currentFilter = 'search'), (isAllBrands = false)"
          />

          <button
            class="bg-[#F8F8F8] py-[10px] px-[28px]"
            @click="currentFilter = 'search'"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.7659"
                cy="9.7666"
                r="8.98856"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0176 16.4851L19.5416 20"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- All Brands List -->
    <div
      v-show="isAllBrands"
      class="grid grid-cols-6 gap-x-[24px] gap-y-[32px] mt-[32px]"
    >
      <div
        v-for="item in brands"
        :key="item.id"
        class="flex flex-col items-center justify-center space-y-[8px] cursor-pointer"
        @click="$router.push(`/brand/${item.slug}`)"
      >
        <img
          class="h-[160px] w-[252px] border border-[#EEEEEE] rounded-lg"
          :src="item.lg_logo || require('@/assets/img/jpg/empty-brand.jpg')"
          alt=""
        />

        <span class="text-[18px]">{{ item.name }}</span>
      </div>
    </div>

    <!-- Filtered Brands -->
    <div
      v-show="!isAllBrands"
      class="grid grid-cols-6 gap-x-[24px] gap-y-[32px] mt-[32px]"
    >
      <div
        v-for="item in currentFilteredBrands"
        :key="item.id"
        class="flex flex-col items-center justify-center space-y-[8px] cursor-pointer"
        @click="$router.push(`/brand/${item.slug}`)"
      >
        <img
          class="h-[160px] border border-[#EEEEEE] rounded-lg"
          :src="item.lg_logo || require('@/assets/img/jpg/empty-brand.jpg')"
          alt=""
        />

        <span class="text-[18px]">{{ item.name }}</span>
      </div>
    </div>

    <PaginationComp />

    <ReusedSlotEmty
      v-if="
        filteredBrandsByLetter.length === 0 ||
        filteredBrandsBySearch.length === 0
      "
      class="mt-[32px]"
      :is-active-btn="false"
      :image-src="require('@/assets/img/icons/empty-cart.svg')"
    >
      <template #header>
        <h1 class="w-[600px] text-center text-[32px] font-medium">
          Брэндов по данному запоросу <br />
          не найдено
        </h1>
      </template>

      <template #description>
        <p class="text-gray text-[16px] max-w-[374px] text-center">
          Попробуйте поискать другие бренды
        </p>
      </template>
    </ReusedSlotEmty>
  </div>
</template>

<script>
export default {
  layout: 'BrandCategoryLayout',
  async asyncData({ store }) {
    await store.dispatch('fetchBrands')
  },
  data() {
    return {
      isEnAlphabet: true,
      isNumeric: false,
      searchQuery: '',
      enAlphabet: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ],
      ruAlphabet: [
        'А',
        'Б',
        'В',
        'Г',
        'Д',
        'Е',
        'Ё',
        'Ж',
        'З',
        'И',
        'Й',
        'К',
        'Л',
        'М',
        'Н',
        'О',
        'П',
        'Р',
        'С',
        'Т',
        'У',
        'Ф',
        'Х',
        'Ц',
        'Ч',
        'Ш',
        'Щ',
        'Ъ',
        'Ы',
        'Ь',
        'Э',
        'Ю',
        'Я',
      ],
      numbersList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      isFiltered: false,
      filterLetter: '',
      activeFilter: '',
      activeButton: null,
      currentFilter: '',
      isAllBrands: true,
      isFilterLetter: false,
      isFilterSearch: false,
    }
  },
  computed: {
    brands() {
      return this.$store.state.brands
    },
    filteredBrandsByLetter() {
      return this.brands.filter((brand) =>
        brand.name.startsWith(this.filterLetter)
      )
    },
    filteredBrandsBySearch() {
      return this.brands.filter((brand) =>
        brand.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    currentFilteredBrands() {
      if (this.currentFilter === 'search') {
        return this.filteredBrandsBySearch
      } else if (this.currentFilter === 'letter') {
        return this.filteredBrandsByLetter
      } else {
        return this.filteredBrandsByLetter
      }
    },
  },
  methods: {
    getAllBrands() {
      this.isAllBrands = true
    },
    sortByLetter(letter) {
      this.currentFilter = 'letter'
      this.isAllBrands = false
      this.filterLetter = letter
    },
  },
}
</script>

<style scoped>
.filter-btn.active {
  border-bottom: 1px solid orange;
  line-height: 24px;
}
</style>
