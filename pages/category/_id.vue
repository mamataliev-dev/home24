<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="flex flex-col space-y-[40px] w-2/12 mt-[32px]">
        <!-- Categories -->
        <div class="category-box">
          <h1 class="category-title">Категории</h1>

          <ul class="flex flex-col space-y-[12px]">
            <li v-for="(elem, index) in category" :key="index">
              <button
                class="font-bold hover:text-orange"
                @click="fetchCategory(elem.slug)"
              >
                {{ elem?.name }}
                {{ elem?.slug }}
              </button>
            </li>
          </ul>

          <ul class="flex flex-col space-y-[12px]">
            <li v-for="item in category.children" :key="item.id">
              <button
                class="hover:text-orange"
                @click="fetchCategory(item.slug)"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>

          <!-- <ul class="flex flex-col space-y-[12px]">
            <li
              v-for="(item, index) in breadcrumbsCategory"
              :key="index"
              @click="fetchCategory(item.to)"
            >
              <button class="hover:text-orange">
                {{ item.text }}
              </button>
            </li>
          </ul> -->
        </div>

        <!-- Sort by -->
        <div v-show="isParent" class="category-box">
          <h1 class="category-title">Сортировать</h1>

          <ul class="flex flex-col space-y-[12px]">
            <li class="flex space-x-[8px]">
              <input
                v-model="selectedSort"
                type="radio"
                name="sort"
                value="popular"
                class="radio-btn"
              />
              <label>по популярности</label>
            </li>

            <li class="flex space-x-[8px]">
              <input
                v-model="selectedSort"
                type="radio"
                name="sort"
                value="cheap_first"
                class="radio-btn"
              />
              <label>низкие цены</label>
            </li>

            <li class="flex space-x-[8px]">
              <input
                v-model="selectedSort"
                type="radio"
                name="sort"
                value="expensive_first"
                class="radio-btn"
              />
              <label>высокие цены</label>
            </li>

            <li class="flex space-x-[8px]">
              <input
                v-model="selectedSort"
                type="radio"
                name="sort"
                value="new"
                class="radio-btn"
              />
              <label>добавлено недавно</label>
            </li>

            <li class="flex space-x-[8px]">
              <input
                v-model="selectedSort"
                type="radio"
                name="sort"
                value="high_rating"
                class="radio-btn"
              />
              <label>высокий рейтинг</label>
            </li>
          </ul>
        </div>

        <!-- Price -->
        <PriceSlider @sortByPrice="sortByPrice" />
      </div>

      <div class="w-10/12 pl-[38px]">
        <el-breadcrumb separator=">" class="mt-[32px] mb-[32px]">
          <el-breadcrumb-item :to="{ path: '/' }">
            <span class="text-orange text-[16px] font-firsNeueRegular">
              Главная
            </span>
          </el-breadcrumb-item>

          <el-breadcrumb-item
            v-for="(crumb, index) in breadcrumbs"
            :key="index"
            :to="crumb.to"
            class="cursor-pointer"
          >
            <span
              v-if="crumb.to"
              class="text-gray text-[16px] font-firsNeueRegular"
            >
              {{ crumb.text }}
            </span>

            <span v-else>{{ crumb.text }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>

        <h1 class="main-title">{{ category.name }}</h1>

        <!-- If parent category -->
        <div v-show="isParent" class="category-id-grid mt-[32px]">
          <div
            v-for="item in category.children"
            :key="item.id"
            class="category-grid-item"
            @click="fetchCategory(item.slug)"
          >
            <img
              class="w-[204px] h-[147px]"
              :src="item.lg_img || require('@/assets/img/jpg/empty-brand.jpg')"
            />
            <span class="font-firsNeueRegular text-[20px] text-center">{{
              item.name
            }}</span>
          </div>
        </div>

        <!-- If child category -->
        <div v-show="!isParent">
          <div class="main-grid mt-[32px]">
            <ProductsBaseProduct
              v-for="item in products"
              :key="item.id"
              :product="item"
            />
          </div>
        </div>

        <!-- If Empty Products -->
        <ReusedSlotEmty
          v-if="products.length === 0"
          :is-active-btn="false"
          :image-src="require('@/assets/img/icons/emty-categories.svg')"
        >
          <template #header>
            <h1 class="text-[32px] font-medium">Товар не найдена</h1>
          </template>

          <template #description>
            <p class="text-gray text-[16px] max-w-[374px] text-center">
              Но вы всегда можете ее наполнить
            </p>
          </template>
        </ReusedSlotEmty>

        <PaginationComp
          v-show="!isParent && products.length !== 0"
          class="mt-[40px]"
        />

        <CategoryInfo
          v-show="!isParent && products.length !== 0"
          class="mt-[80px]"
          :desc="category.desc"
        />
      </div>
    </div>

    <ProductsTopProducts v-show="isParent" />

    <CategoryInfo v-show="isParent" :desc="category.desc" />
  </div>
</template>

<script>
export default {
  layout: 'BrandCategoryLayout',
  async asyncData({ store, params }) {
    await store.dispatch('fetchCategoryId', params.id)
    await store.dispatch('fetchShowcases')
  },
  data() {
    return {
      currentCategory: '',
      isParent: true,
      selectedSort: '',
      categoryId: this.$route.params.id,
      categoryArr: null,
    }
  },
  head() {
    return {
      title: `Категории | ${this.category.name}`,
    }
  },
  computed: {
    // categoryHistory() {
    //   const breadcrumbs = []
    //   const currentCategory = this.category.children

    //   if (currentCategory.parent !== null) {
    //     breadcrumbs.push({
    //       name: currentCategory.name,
    //       to: currentCategory.slug,
    //     })
    //   } else if (currentCategory.parent === null) {
    //     breadcrumbs.push({
    //       name: currentCategory.name,
    //       to: currentCategory.slug,
    //     })
    //   }

    //   return breadcrumbs
    // },
    breadcrumbs() {
      const breadcrumbs = []

      if (this.category) {
        let currentCategory = this.category

        breadcrumbs.push({
          text: currentCategory.name,
          to: '',
        })

        currentCategory = currentCategory.parent

        while (currentCategory) {
          breadcrumbs.unshift({
            text: currentCategory.name,
            to: currentCategory.slug,
          })

          currentCategory = currentCategory.parent
        }
      }

      return breadcrumbs
    },
    breadcrumbsCategory() {
      const breadcrumbs = []

      if (this.category) {
        breadcrumbs.push({
          text: this.category.name,
          to: this.category.slug,
        })
      }

      let currentCategory = this.category.parent

      while (currentCategory) {
        breadcrumbs.unshift({
          text: currentCategory.name,
          to: currentCategory.slug,
        })

        currentCategory = currentCategory.parent
      }

      const pathArray = this.$route.path
        .split('/')
        .filter(
          (p) => p && !p.includes('product') && p && !p.includes('category')
        )

      pathArray.forEach((path, index) => {
        const text = path
          .replace(/-/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          )

        const to = '/' + pathArray.slice(0, index + 1).join('/')

        if (!breadcrumbs.some((breadcrumb) => breadcrumb.text === text)) {
          breadcrumbs.push({ text, to })
        }
      })

      return breadcrumbs
    },
    categoryData() {
      return this.$store.state.categoryId
    },
    category() {
      return this.categoryData.category
    },
    products() {
      return this.categoryData.products.data.map((mainProduct) => {
        return mainProduct.products[0] || undefined
      })
    },
    attributes() {
      return this.categoryData.attributes
    },
    product_max_price() {
      return this.categoryData.product_max_price
    },
    product_min_price() {
      return this.categoryData.product_min_price
    },
  },
  watch: {
    category(newVal) {
      if (newVal.parent !== null) {
        console.log('child')
        this.isParent = false
        console.log('is parent: ', this.isParent)
      } else {
        console.log('parent')
        this.isParent = true
        console.log('is parent: ', this.isParent)
      }
    },
    currentCategory(newVal) {
      if (newVal) {
        this.fetchCategoryId(newVal)
      }
    },
    selectedSort(newVal) {
      this.sortCategoryBy(newVal)
    },
  },
  mounted() {
    if (this.category.parent !== null) {
      this.isParent = false
    } else {
      this.isParent = true
    }

    console.log(this.breadcrumbs)
  },
  methods: {
    fetchCategory(slug) {
      this.isParent = false
      this.$router.push(`/category/${slug}`)
      this.currentCategory = slug
    },
    async fetchCategoryId(id) {
      await this.$store.dispatch('fetchCategoryId', id)
    },
    async sortCategoryBy(id, sort) {
      try {
        const response = await this.$axiosURL.get(
          `/categories/${id}?sort=${sort}`
        )
        this.$store.commit('setCategoryId', response.data)
        this.$router.push(`/category/${this.categoryId}?sort=${sort}`)
      } catch (error) {
        console.error('Error fetching:', error)
      }
    },
    async sortByPrice(sort) {
      try {
        const response = await this.$axiosURL.get(
          `/categories/${this.categoryId}?min_price=${sort[0]}&max_price=${sort[1]}`
        )
        this.$store.commit('setCategoryId', response.data)

        this.$router.push(
          `/category/${this.categoryId}?min_price=${sort[0]}&max_price=${sort[1]}`
        )
      } catch (error) {
        console.error('Error fetching:', error)
      }
    },
  },
}
</script>

<style>
.radio-btn {
  appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 1px solid #eaeaeb;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

.radio-btn:checked {
  background-color: #ff6418;
  border-color: #ff6418;
}

.radio-btn:checked::before {
  content: '';
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  background-color: #fff;
}

label {
  cursor: pointer;
}

li {
  align-items: center;
}
</style>
