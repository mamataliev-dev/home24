export const state = () => ({
  userName: '',
  loading: false,
  brands: {},
  categories: {},
  banners: [],
  posts: [],
  postId: [],
  promotions: [],
  feedbacks: [],
})

export const mutations = {
  setLoading(state, value) {
    state.loading = value
  },

  setBrands(state, value) {
    state.brands = value
  },

  setCategories(state, value) {
    state.categories = value
  },

  setBanners(state, value) {
    state.banners = value
  },

  setPosts(state, value) {
    state.posts = value
  },

  setPostId(state, value) {
    state.postId = value
  },

  setPromotions(state, value) {
    state.promotions = value
  },

  setFeedbacks(state, value) {
    state.feedbacks = value
  },
}

export const actions = {
  // Get Brands
  async fetchBrands({ commit }) {
    commit('setLoading', true)
    try {
      const response = await this.$axiosURL.get('/brands')
      commit('setBrands', response.data)
    } catch (error) {
      console.error('Error fetching:', error)
    } finally {
      commit('setLoading', false)
    }
  },

  // Get Product Categories
  async fetchCategories({ commit }) {
    commit('setLoading', true)
    try {
      const response = await this.$axiosURL.get('/categories')
      commit('setCategories', response.data.data)
    } catch (error) {
      console.error('Error fetching:', error)
    } finally {
      commit('setLoading', false)
    }
  },

  // Get Banners
  async fetchBanners({ commit }) {
    commit('setLoading', true)
    try {
      const response = await this.$axiosURL.get('/banners')
      commit('setBanners', response.data.banners.data)
    } catch (error) {
      console.error('Error fetching:', error)
    } finally {
      commit('setLoading', false)
    }
  },

  // Get Posts
  async fetchPosts({ commit }) {
    commit('setLoading', true)
    try {
      const response = await this.$axiosURL.get('/posts')
      commit('setPosts', response.data.posts.data)
    } catch (error) {
      console.error('Error fetching:', error)
    } finally {
      commit('setLoading', false)
    }
  },

  // Get Post By Id
  async fetchPostId({ commit }, id) {
    commit('setLoading', true)
    try {
      const response = await this.$axiosURL.get(`/posts/${id}`)
      commit('setPostId', response.data.post)
      console.log(response.data.post)
    } catch (error) {
      console.error('Error fetching:', error)
    } finally {
      commit('setLoading', false)
    }
  },

  // Get Promotions
  async fetchPromotions({ commit }) {
    commit('setLoading', true)
    try {
      const response = await this.$axiosURL.get(`/promotions`)
      commit('setPromotions', response.data.promotions.data)
    } catch (error) {
      console.error('Error fetching:', error)
    } finally {
      commit('setLoading', false)
    }
  },

  // Get Feedbacks
  async fetchFeedbacks({ commit }) {
    commit('setLoading', true)
    try {
      const response = await this.$axiosURL.get(`/feedbacks`)
      commit('setFeedbacks', response.data.feedbacks.data)
    } catch (error) {
      console.error('Error fetching:', error)
    } finally {
      commit('setLoading', false)
    }
  },
}

export const getters = {}
