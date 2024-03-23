<template>
  <div class="container mx-auto conponent-margin-top">
    <div
      class="bg-[#F9F9F9] flex justify-between items-center px-[96px] py-[77px] rounded-xl space-y-[17px] relative"
    >
      <div class="flex flex-col">
        <div class="flex flex-col">
          <h1
            class="xl:text-[36px] 2xl:text-[48px] font-medium mb-[16px] leading-[50px] font-firsNeueMedium"
          >
            Заказывайте в новом приложении <br />
            Маркета и получайте бонусы
          </h1>
          <p class="text-[24px] font-firsNeueRegular">
            Home24.uz скачать мобильное приложение
          </p>
        </div>

        <div
          class="flex justify-between items-center 2xl:items-end xl:mt-10 2xl:mt-0"
        >
          <div
            class="flex flex-col 2xl:flex-row items-center space-y-[24px] 2xl:space-y-[0px] 2xl:space-x-[24px]"
          >
            <a href="#">
              <img
                class="w-[187px] h-[57px]"
                src="@/assets/img/png/store1.png"
                alt=""
              />
            </a>

            <a href="#">
              <img
                class="w-[187px] h-[57px]"
                src="@/assets/img/png/store2.png"
                alt=""
              />
            </a>
          </div>

          <div
            class="flex items-center space-x-[16px] xl:mt-0 2xl:mt-14 footer-qr"
          >
            <img
              class="xl:w-[70px] xl:h-[70px] 2xl:w-[100px] 2xl:h-[100px]"
              src="@/assets/img/png/footer-qr.png"
              alt=""
            />
            <p
              class="max-w-[246px] text-[18px] text-[#9A999B] font-firsNeueRegular"
            >
              Наведите камеру <br />
              на QR-код, чтобы <br />
              скачать
            </p>
          </div>
        </div>
      </div>

      <div>
        <!-- <img class="absolute -top-50 right-[60px]" :src="imageSrc" alt="" /> -->
        <img
          class="absolute xl:-top-[10px] 2xl:-top-[50px] xl:right-[40px] 2xl:right-[60px] xl:w-[520px] 2xl:w-[560px]"
          src="@/assets/img/png/advertising1.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileAppAd1',
  props: {
    imageSrc: {
      type: String,
      default: '@/assets/img/png/advertising1.png',
    },
  },
}
</script>
