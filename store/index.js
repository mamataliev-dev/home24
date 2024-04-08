export const state = () => ({
  userName: '',
  loading: false,
  categories: [],
  categoryId: [],
  banners: [],
  showcases: [],
  productsSort: [],
  brands: [],
  currentShowcase: [],
  posts: [],
  productId: [],
})

export const mutations = {
  setCategories(state, value) {
    state.categories = value
  },

  setCategoryId(state, value) {
    state.categoryId = value
  },

  setBanners(state, value) {
    state.banners = value
  },

  setShowcases(state, value) {
    state.showcases = value
  },

  setCurrentShowcase(state, value) {
    state.currentShowcase = value
  },

  setProductsSort(state, value) {
    state.productsSort = value
  },

  setBrands(state, value) {
    state.brands = value
  },

  setPosts(state, value) {
    state.posts = value
  },

  setProductId(state, value) {
    state.productId = value
  },
}

export const actions = {
  // Get Posts
  async fetchPosts({ commit }) {
    try {
      const response = await this.$axiosURL.get('/posts')
      commit('setPosts', response.data.posts.data)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },

  // Get Brands
  async fetchBrands({ commit }) {
    try {
      const response = await this.$axiosURL.get('/brands')
      commit('setBrands', response.data.brands)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },

  // ?
  // Get Product Categories
  async fetchCategories({ commit }) {
    try {
      const response = await this.$axiosURL.get('/categories')
      commit('setCategories', response.data.data)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },

  // Get Category ID
  async fetchCategoryId({ commit }, id) {
    try {
      const response = await this.$axiosURL.get(`/categories/${id}`)
      commit('setCategoryId', response.data)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },

  // Get Sorted Category ID
  async sortCategoryBy({ commit }, id, sort) {
    try {
      const response = await this.$axiosURL.get(
        `/categories/${id}?sort=${sort}`
      )
      commit('setCategoryId', response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },

  // Get Banners
  async fetchBanners({ commit }) {
    try {
      const response = await this.$axiosURL.get('/banners')
      commit('setBanners', response.data.banners.data)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },

  // Get Product Id
  async fetchProductId({ commit }, id) {
    try {
      const response = await this.$axiosURL.get(`/products/${id}`)
      commit('setProductId', response.data)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },

  // Get Sorted Products
  async fetchProductsSort({ commit }, query) {
    try {
      const response = await this.$axiosURL.get(`/products?${query}`)
      commit('setProductsSort', response.data.products.data)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },

  // Get Showcases
  async fetchShowcases({ commit }) {
    try {
      const response = await this.$axiosURL.get(`/showcases`)
      commit('setShowcases', response.data)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },

  // Get Current Showcases
  async fetchCurrentShowcase({ commit }, id) {
    try {
      const response = await this.$axiosURL.get(`/showcases/${id}`)
      commit('setCurrentShowcase', response.data)
    } catch (error) {
      console.error('Error fetching:', error)
    }
  },
}

export const getters = {}
