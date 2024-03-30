<template>
  <div>
    <h1>All Brands</h1>
    <ul>
      <li v-for="brand in brands" :key="brand.id">{{ brand.name }}</li>
    </ul>

    <!-- Filtered Brands by Letter Block -->
    <div v-if="filterLetter && filteredBrandsByLetter.length">
      <h2>Filtered by Letter: {{ filterLetter }}</h2>
      <ul>
        <li v-for="brand in filteredBrandsByLetter" :key="brand.id">
          {{ brand.name }}
        </li>
      </ul>
    </div>

    <!-- Brands Filtered by Search Block -->
    <div v-if="searchQuery && filteredBrandsBySearch.length">
      <h2>Search Results</h2>
      <ul>
        <li v-for="brand in filteredBrandsBySearch" :key="brand.id">
          {{ brand.name }}
        </li>
      </ul>
    </div>

    <!-- Empty Modal/Block -->
    <div v-if="isEmpty">
      <p>No brands found matching the criteria.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      brands: [],
      filterLetter: '',
      searchQuery: '',
    }
  },
  computed: {
    filteredBrandsByLetter() {
      if (!this.filterLetter) return []
      return this.brands.filter((brand) =>
        brand.name.startsWith(this.filterLetter)
      )
    },
    filteredBrandsBySearch() {
      if (!this.searchQuery) return []
      return this.brands.filter((brand) =>
        brand.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    isEmpty() {
      if (this.filterLetter && !this.filteredBrandsByLetter.length) return true
      if (this.searchQuery && !this.filteredBrandsBySearch.length) return true
      return false
    },
  },
  mounted() {
    this.fetchBrands()
  },
  methods: {
    async fetchBrands() {
      try {
        const response = await axios.get('https://e-shop.ndc.uz/api/brands')
        this.brands = response.data
      } catch (error) {
        console.error('Error fetching brands:', error)
      }
    },
  },
}
</script>
