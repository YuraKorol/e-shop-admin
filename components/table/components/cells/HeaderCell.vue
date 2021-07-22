<template>
  <th :colspan="colspan">
    <slot />
  </th>
</template>

<script>
export default {
  props: {
    colspan: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>

</style>