<template>
  <div>
    {{ $router.params }}
  </div>
</template>

<script>
export default {
  name: 'ProductId',
  head() {
    return {
      title: 'Продукт | ID',
    }
  },
}
</script>
