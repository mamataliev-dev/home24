<template>
  <div>
    <nav class="breadcrumbs">
      <ul>
        <li v-for="(crumb, index) in breadcrumbsPath" :key="index">
          <router-link :to="crumb.to">{{ crumb.text }}</router-link>
        </li>
      </ul>
    </nav>
    <!-- Content and logic to display categories and handle selections -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Assuming `category` would be populated with the current category from the API
      category: null,
      // Example of categories structure received from API
      categories: [
        { id: 1, name: "Root Category", slug: "root-category", parent_id: null },
        { id: 2, name: "Child Category", slug: "child-category", parent_id: 1 },
        { id: 3, name: "Sub Child Category", slug: "sub-child-category", parent_id: 2 },
        // Add your actual categories structure here
      ],
    };
  },
  computed: {
    breadcrumbsPath() {
      const breadcrumbs = [];
      let currentCategory = this.category;

      // Build breadcrumbs for the current category and its parents
      while (currentCategory) {
        breadcrumbs.unshift({
          text: currentCategory.name,
          to: `/category/${currentCategory.slug}`,
        });
        // Find the parent category object based on currentCategory.parent_id
        currentCategory = this.categories.find(cat => cat.id === currentCategory.parent_id);
      }

      return breadcrumbs;
    },
  },
  mounted() {
    // Example to set the initial category (this would be based on your actual data fetching logic)
    this.fetchCategory();
  },
  methods: {
    fetchCategory() {
      // Simulate fetching a category by id (for demonstration, this just selects a category directly)
      this.category = this.categories.find(cat => cat.id === 3); // Assuming '3' is the current category id

      // Here you would fetch the category from the API and set `this.category`
    },
  },
};
</script>
