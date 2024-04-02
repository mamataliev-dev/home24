<template>
  <div>
    <button class="text-[14px] text-gray mb-[8px] hover" @click="toggle">
      {{ node.name }}
    </button>

    <div v-if="isOpen">
      <ReusedTreeNode
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        class="mb-[12px] pl-[12px]"
        @click="fetchCategory(child.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
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
    toggle() {
      this.isOpen = !this.isOpen
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
