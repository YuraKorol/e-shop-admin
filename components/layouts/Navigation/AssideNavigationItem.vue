<template>
  <nuxt-link
    no-prefetch
    :to="path"
    class="nav_link d-flex justify-content-center p-2"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.active {
  color: black;
}
.nav_link {
  color: gray;
}
</style>