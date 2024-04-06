<template>
  <div class="container mx-auto">
    <h1 class="main-title">Вопросы и ответы</h1>

    <el-collapse v-model="activeNames" class="mt-[32px]" @change="handleChange">
      <el-collapse-item
        v-for="(item, index) in faq.faq"
        :key="item.id"
        :title="item.question"
        :name="index"
      >
        <p>{{ item.answer }}</p>
      </el-collapse-item>
    </el-collapse>

    <div class="mt-[32px]">
      <p class="text-[20px] text-gray">
        Остались вопросы?
        <br />
        <br />
        Если у вас остались вопросы, но вы не смогли найти на них ответы на
        данной странице, <br />
        или у вас есть отзывы или замечания просим Вас обращаться:
        <br />
        <br />
        По электронной почте: <span class="text-black">vip@home24.uz</span>
        <br />
        <br />
        По телефону <span class="text-black">(99871) 200-7-002.</span>
      </p>
    </div>

    <AppAdvertising />
  </div>
</template>

<script>
export default {
  async asyncData({ $axiosURL }) {
    try {
      const response = await $axiosURL.get(`/faq`)
      console.log(response.data)
      return { faq: response.data }
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },
  data() {
    return {
      activeNames: ['1'],
    }
  },
  methods: {
    handleChange(val) {},
  },
}
</script>

<style>
.el-collapse-item {
  padding: 20px;
  border: none;
  background: #f5f5f7;
  border-radius: 24px;
  margin-bottom: 8px;
}

.el-collapse-item__header {
  font-size: 20px;
  color: #ff7e00;
  margin-top: 8px;
  background: none;
  border: none;
}

.el-icon-arrow-right:before {
  content: url('@/assets/img/icons/plus.svg');
}

.el-collapse-item__arrow.is-active {
  content: url('@/assets/img/icons/minus.svg');
  transform: rotate(180deg);
}

.el-collapse-item__wrap {
  background: none;
  border: none;
}

.el-collapse-item__content {
  font-size: 16px;
  margin-top: 20px;
  background: none;
  border: none;
}

.el-collapse {
  border: none;
}
</style>
