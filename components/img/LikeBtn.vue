<template>
  <div>
    <!-- Defaut -->
    <svg
      v-if="!isActive"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" :fill="'white'" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.1593 21.9025C17.6064 21.0119 18.9526 19.9638 20.1738 18.7768C21.0324 17.922 21.686 16.8798 22.0846 15.7303C22.8019 13.5002 21.9641 10.9472 19.6193 10.1917C18.3869 9.79496 17.041 10.0217 16.0026 10.801C14.9638 10.0227 13.6184 9.79599 12.386 10.1917C10.0412 10.9472 9.19729 13.5002 9.91459 15.7303C10.3132 16.8798 10.9668 17.922 11.8254 18.7768C13.0466 19.9638 14.3928 21.0119 15.8399 21.9025L15.9966 22L16.1593 21.9025Z"
        stroke="#020105"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5071 12.7019C12.7969 12.9288 12.2923 13.5664 12.2293 14.3166"
        stroke="#020105"
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.1593 21.9025C17.6064 21.0119 18.9526 19.9638 20.1738 18.7768C21.0324 17.922 21.686 16.8798 22.0846 15.7303C22.8019 13.5002 21.964 10.9472 19.6192 10.1917C18.3869 9.79496 17.041 10.0217 16.0026 10.801C14.9638 10.0227 13.6183 9.79599 12.3859 10.1917C10.0411 10.9472 9.19726 13.5002 9.91456 15.7303C10.3132 16.8798 10.9668 17.922 11.8254 18.7768C13.0466 19.9638 14.3928 21.0119 15.8398 21.9025L15.9966 22L16.1593 21.9025Z"
        fill="#FF6418"
      />
      <path
        d="M13.5071 12.7019C12.7969 12.9288 12.2923 13.5664 12.2292 14.3166"
        stroke="white"
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
