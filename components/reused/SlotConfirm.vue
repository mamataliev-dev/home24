<template>
  <div>
    <div
      class="fixed inset-0 z-50 bg-black bg-opacity-65 flex justify-center items-center"
    >
      <div class="bg-white rounded-md shadow-lg w-[590px]" @click.stop>
        <div
          class="flex justify-between items-center rounded-md pt-[22px] pb-[14px] pr-[30px] pl-[40px] bg-[#F7F7F7]"
        >
          <h1 class="font-medium text-[24px] text-black font-firsNeueMedium">
            {{ title }}
          </h1>

          <button @click="$emit('closeModal'), false">
            <a-icon class="text-orange text-[30px]" type="close" />
          </button>
        </div>

        <div class="flex justify-between px-[40px] py-[54px]">
          <button
            class="py-[16px] px-[108px] rounded-md bg-[#EBEBEB]"
            @click="$emit('closeModal'), false"
          >
            Нет
          </button>

          <button
            class="text-white py-[16px] px-[108px] rounded-md bg-orange"
            @click="$emit('confirmOperation')"
          >
            ДА
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Default Value',
    },
  },
}
</script>
