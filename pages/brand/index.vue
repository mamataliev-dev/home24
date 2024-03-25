<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-between">
      <div class="flex flex-col space-y-[16px]">
        <h1 class="main-title">Популярные бренды</h1>

        <div class="flex space-x-[24px]">
          <button
            class="text-orange text-[16px] w-auto border-b border-orange leading-[24px] font-firsNeueRegular"
          >
            Все бренды
          </button>

          <div class="flex space-x-[8px]">
            <button
              v-for="item in isEnAlphabet ? enAlphabet : ruAlphabet"
              v-show="!isNumeric"
              :key="item"
              class="hover:text-orange focus:text-orange"
              @click="filterBrand(item)"
            >
              {{ item }}
            </button>

            <button
              v-for="item in numbersList"
              v-show="isNumeric"
              :key="item"
              class="hover:text-orange focus:text-orange"
              @click="filterBrand(item)"
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
        <form class="flex" @submit.prevent="searchBrand">
          <input
            v-model="queryBrand"
            placeholder="Искать"
            type="text"
            class="xl:w-[300px] 2xl:w-[400px] border border-[#EBEBEB] py-[8px] px-[16px] rounded-tl-lg rounded-bl-lg"
          />

          <button
            class="bg-[#F8F8F8] py-[10px] px-[28px]"
            @submit.prevent="searchBrand"
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
        </form>
      </div>
    </div>

    <!-- Brands List -->
    <div class="grid grid-cols-6 gap-x-[24px] gap-y-[32px] mt-[32px]">
      <div
        v-for="item in 20"
        :key="item"
        class="flex flex-col items-center justify-center space-y-[8px] cursor-pointer"
        @click="$router.push(`/brand/${item}`)"
      >
        <img
          class="h-[160px] border border-[#EEEEEE] rounded-lg"
          src="@/assets/img/png/artel.png"
          alt=""
        />

        <span class="text-[18px]">Artel</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'BrandCategoryLayout',
  data() {
    return {
      isEnAlphabet: true,
      isNumeric: false,
      queryBrand: '',
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
    }
  },
  methods: {
    searchBrand(item) {},
    filterBrand(val) {},
  },
}
</script>
