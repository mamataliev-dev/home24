<template>
  <div>
    <div v-for="(item, index) in node" :key="index">
      <button
        class="text-[14px] text-gray mb-[8px] hover"
        @click="toggle(item.id)"
      >
        {{ item.name }}
      </button>

      <div v-if="isOpen">
        <TreeNode
          v-for="child in item.children"
          :key="child.id"
          :node="item.children"
          class="mb-[12px] pl-[12px]"
          @fetchCategoryId="fetchCategoryId(child.id)"
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
    toggle(id) {
      this.isOpen = !this.isOpen
      this.$emit('fetchCategoryId', id)
    },

    fetchCategoryId(id) {
      this.$emit('fetchCategoryId', id)
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
