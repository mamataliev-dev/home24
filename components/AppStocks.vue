<template>
  <div class="container mx-auto conponent-margin-top">
    <div class="swiper-stock relative">
      <div class="swiper-wrapper">
        <div v-for="item in banners" :key="item.id" class="swiper-slide">
          <div class="slider-content">
            <nuxt-link to="/stocks">
              <img
                class="w-[100%] h-[372px] rounded-xl"
                :src="
                  item.lg_m_img || require('@/assets/img/jpg/empty-brand.jpg')
                "
                alt=""
              />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="swiper-button-prev stock-swiper-button-prev">
        <img
          class="w-[48px] h-[48px]"
          src="@/assets/img/icons/swiper-left.svg"
          alt=""
        />
      </div>

      <div class="swiper-button-next stock-swiper-button-next">
        <img
          class="w-[48px] h-[48px]"
          src="@/assets/img/icons/swiper-right.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  computed: {
    banners() {
      return this.$store.state.banners.filter((b) => b.type === 'medium')
    },
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay])

    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper-stock', {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 1500,
      },
      navigation: {
        nextEl: '.stock-swiper-button-next',
        prevEl: '.stock-swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 0,
    })
  },
}
</script>

<style scoped>
.swiper-stock {
  overflow: hidden;
  position: relative !important;
}

.swiper-product {
  overflow: hidden;
  position: relative !important;
}

.stock-swiper-button-prev:after,
.stock-swiper-button-next:after,
.swiper-container-rtl .swiper-button-next:after {
  content: '';
}

.stock-swiper-button-prev,
.stock-swiper-button-next {
  width: 48px;
  height: 48px;
}
</style>
