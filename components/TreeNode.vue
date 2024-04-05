<template>
  <div>
    <div v-for="item in node" :key="item.id">
      <button
        class="text-[14px] text-gray mb-[8px] hover"
        @click="toggle(item.slug)"
      >
        {{ item.name }}
      </button>

      <div v-if="isOpen">
        <ReusedTreeNode
          v-for="child in item.children"
          :key="child.id"
          :node="child"
          class="mb-[12px] pl-[12px]"
          @click="fetchCategory(child.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    node: {
      type: Array,
      required: true,
    },
    activeNodeId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    isActive() {
      return this.node.id === this.activeNodeId
    },
  },
  methods: {
    toggle(slug) {
      this.isOpen = !this.isOpen
      this.$emit('fetchCategoryId', slug)
    },

    fetchCategory(id) {
      this.$emit('fetchCategory', id)
    },
  },
}
</script>

<style scoped>
.active-node {
  font-size: 16px;
  color: black;
}
</style>
