<template>
  <div>
    <h1 class="font-firsNeueMedium text-[20px] text-[#020105]">Цена</h1>

    <div class="mt-[16px]">
      <!-- Range Slider -->
      <el-slider
        v-model="priceRange"
        :show-tooltip="false"
        :min="110000"
        :max="1500000"
        range
        @change="getCurrentPrice(priceRange)"
      ></el-slider>

      <div
        class="flex flex-col mt-[10px] 2xl:mt-[0px] 2xl:flex-row justify-center items-center space-y-[14px] 2xl:space-x-[24px] 2xl:space-y-[0px]"
      >
        <!-- Minimum Value Input -->
        <div class="relative">
          <input
            v-model.number="priceRange[0]"
            type="number"
            placeholder="от 10 000"
            class="xl:w-[180px] 2xl:w-[114px] bg-[#F9F9F9] border border-[#D9D9D9] rounded-lg py-[10px] pl-[32px] pr-[8px] focus:outline-orange placeholder:text-[14px] placeholder:text-gray"
            @change="getCurrentPrice(priceRange[0])"
          />
          <label
            class="absolute left-[8px] top-[12px] z-10 text-[14px] text-[#020105]"
            >от</label
          >
        </div>

        <!-- Maximum Value Input -->
        <div class="relative">
          <input
            v-model.number="priceRange[1]"
            type="number"
            placeholder="от 1 000 0000"
            class="xl:w-[180px] 2xl:w-[114px] bg-[#F9F9F9] border border-[#D9D9D9] rounded-lg py-[10px] pl-[32px] pr-[8px] focus:outline-orange placeholder:text-[14px] placeholder:text-gray"
            @change="getCurrentPrice(priceRange[1])"
          />
          <label
            class="absolute left-[8px] top-[12px] z-10 text-[14px] text-[#020105]"
            >до</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceRange: [110000, 1500000],
    }
  },
  methods: {
    getCurrentPrice(value) {
      this.$emit('sortByPrice', value)
    },
  },
}
</script>

<style>
.el-slider {
  width: 220px !important;
  margin: 0 auto !important;
  margin-left: 20px !important;
}

@media (max-width: 1400px) {
  .el-slider {
    width: 180px !important;
  }
}

.el-slider__bar {
  background: #ff6418 !important;
  height: 2px !important;
}

.el-slider__runway {
  height: 2px !important;
}

.el-slider__button-wrapper {
  height: 18px !important;
  width: 18px !important;
  top: -10px !important;
}

.el-slider__button {
  border: 0.8px solid #ef3f27 !important;
}
</style>
