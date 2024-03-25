<template>
  <div class="container mx-auto">
    <h1 class="main-title">Оформление заказа</h1>

    <div class="grid grid-cols-12 items-start mt-[32px] gap-x-[24px]">
      <div class="flex flex-col gap-y-[32px] col-span-8">
        <div
          class="flex flex-col gap-y-[24px] p-[32px] border border-[#EBEBEB] rounded-lg"
        >
          <div class="flex flex-col gap-y-[24px] w-[496px]">
            <span class="text-gray font-medium">Способ получения</span>

            <div class="bg-[#F8F8F8] p-[16px]">
              <div class="flex flex-col justify-center">
                <div
                  v-for="item in 1"
                  :key="item"
                  class="flex items-start gap-x-[11px] pb-[20px] border-b border-[#EBEBEB]"
                >
                  <input type="radio" class="mt-[5px]" />

                  <div class="flex flex-col">
                    <span class="text-black font-medium"
                      >Самовывоз Home24.uz</span
                    >
                    <span class="text-gray text-[14px]"
                      >г.Ташкент, р.Яшнабадский, ул.Паркент,180</span
                    >
                  </div>
                </div>

                <button class="pt-[32px] text-orange font-medium">
                  Показать на карте
                </button>
              </div>
            </div>

            <div class="flex flex-col gap-y-[6px]">
              <label class="font-medium text-black">Ф.И.О</label>
              <el-input v-model="nameTxt" placeholder="Ф.И.О" clearable>
              </el-input>
            </div>

            <div class="flex flex-col gap-y-[6px]">
              <label class="font-medium text-black">Телефон</label>
              <el-input
                v-model="nameTxt"
                placeholder="+998 (--)--- -- --"
                type="number"
                clearable
              >
              </el-input>
            </div>

            <div class="flex items-start gap-x-[11px] p-[16px] bg-[#F8F8F8]">
              <input class="mt-[7px]" type="radio" />

              <div class="flex flex-col">
                <span class="font-medium">Курьером до двери</span>
                <span class="text-[14px]">Доставим 8 ноября, 30 000 сум</span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-span-8 flex flex-col gap-y-[24px] p-[32px] border border-[#EBEBEB] rounded-lg"
        >
          <div class="flex justify-between items-center">
            <h2 class="font-semibold text-[20px]">Дополнительная информация</h2>

            <button>
              <span
                class="el-icon-arrow-down text-[20px] font-medium text-black"
              ></span>
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-y-[12px]">
          <span class="text-gray font-medium">Способ оплаты</span>

          <div class="flex gap-x-[24px]">
            <div
              class="border border-[#EBEBEB] rounded-lg px-[12px] py-[14px] w-[358px]"
            >
              <div class="flex items-start gap-x-[11px] p-[16px]">
                <input class="mt-[7px]" type="radio" />

                <div class="flex flex-col">
                  <span class="text-black">При получении</span>
                  <span class="text-[14px] mt-[2px] text-gray"
                    >Наличными или картой</span
                  >

                  <div class="flex gap-x-[30px] mt-[6px]">
                    <img src="@/assets/img/png/uzcard.png" alt="" />
                    <img src="@/assets/img/png/humo.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="border border-[#EBEBEB] rounded-lg px-[12px] py-[14px] w-[358px]"
            >
              <div class="flex flex-col gap-y-[12px] gap-x-[11px] p-[16px]">
                <div class="flex items-start gap-x-[15px]">
                  <input class="mt-[7px]" type="radio" />
                  <span class="text-black">Онлайн платеж</span>
                </div>

                <div class="flex gap-x-[9px] mt-[6px]">
                  <button>
                    <img
                      class="border border-[#EBEBEB] p-[8px] rounded-lg"
                      src="@/assets/img/png/payme.png"
                      alt=""
                    />
                  </button>

                  <button>
                    <img
                      class="border border-[#EBEBEB] p-[8px] rounded-lg"
                      src="@/assets/img/png/apelsin.png"
                      alt=""
                    />
                  </button>

                  <button>
                    <img
                      class="border border-[#EBEBEB] p-[8px] rounded-lg"
                      src="@/assets/img/png/click.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-4">
        <div class="border border-[#EBEBEB] rounded-lg p-[24px]">
          <div class="flex justify-between pb-[12px]">
            <span class="text-[22px] font-semibold">Ваш заказ</span>
            <nuxt-link to="/cart">
              <span class="font-medium text-orange">Перейти в корзину</span>
            </nuxt-link>
          </div>

          <div
            v-for="item in 2"
            :key="item"
            class="flex flex-col gap-y-[16px] border-t border-lightGray pt-[16px] pb-[24px]"
          >
            <div class="flex justify-between">
              <span class="text-[18px font-medium]">Товары, 2 шт</span>
              <span class="text-[18px] font-firsNeueMedium">4 000 000 сум</span>
            </div>

            <div class="flex justify-between">
              <span class="text-[16px] text-[#727474]">Доставка:</span>
              <span class="text-[16px] text-[#727474]">бесплатно</span>
            </div>
          </div>

          <div class="flex justify-between pt-[16px] border-t border-lightGray">
            <span class="font-medium text-[18px]">Итого</span>
            <span class="text-[18px] font-firsNeueMedium">4 000 000 сум</span>
          </div>

          <div
            class="mt-[16px] px-[24px] py-[16px] bg-[#F9F9F9] rounded-lg gap-x-[4px]"
          >
            <button>
              <span
                class="el-icon-arrow-down text-[20px] font-medium text-black"
              ></span>
            </button>

            <span class="text-[#020105] text-[18px]">Есть промокод?</span>

            <input
              class="mt-[16px] border border-[#EBEBEB] p-[16px] rounded-lg w-[100%]"
              type="text"
              placeholder="Введите промокод"
            />
          </div>

          <button
            class="mt-[32px] text-white bg-orange py-[18px] rounded-lg w-[100%]"
          >
            Оформит заказ
          </button>
        </div>

        <div class="mt-[40px] border border-[#EBEBEB] rounded-lg p-[24px]">
          <div class="flex items-center justify-between">
            <h2 class="text-[24px] font-firsNeueMedium">Товары в заказе</h2>

            <button>
              <span
                class="el-icon-arrow-down text-[20px] font-medium text-black"
              ></span>
            </button>
          </div>

          <div class="mt-[12px]">
            <div class="flex gap-x-[12px]">
              <img
                class="w-[82px] h-[82px] rounded-lg border border-[#F4F5F5]"
                src="@/assets/img/jpg/test-image.jpg"
                alt=""
              />

              <div class="flex flex-col gap-y-[23px]">
                <span class="text-[14px]"
                  >ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО
                  6206A-2
                </span>

                <div class="flex gap-x-[40px]">
                  <span class="text-[14px] text-gray">Количество: </span>
                  <span class="text-[14px] text-black">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPage',
  data() {
    return {
      nameTxt: '',
    }
  },
  head() {
    return {
      title: 'Оформление заказа',
    }
  },
}
</script>
