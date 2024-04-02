<template>
  <div>
    <!-- Default -->
    <svg
      v-if="!isActive"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="white" />
      <path
        d="M21.4428 19.2263H12.3643"
        stroke="#200E32"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.7121 21.9448L21.4432 19.2263L18.7121 16.5078"
        stroke="#200E32"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5553 12.6074H19.6338"
        stroke="#200E32"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.286 9.88892L10.5549 12.6074L13.286 15.326"
        stroke="#200E32"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <!-- Active -->
    <svg
      v-if="isActive"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#F8F8FA" />
      <path
        d="M21.4428 19.2263H12.3643"
        stroke="#FF6418"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.712 21.9448L21.4431 19.2263L18.712 16.5078"
        stroke="#FF6418"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5552 12.6074H19.6338"
        stroke="#FF6418"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.286 9.88892L10.5549 12.6074L13.286 15.326"
        stroke="#FF6418"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
