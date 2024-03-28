<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center"
  >
    <div class="loader"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.loader {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #ff6418; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
