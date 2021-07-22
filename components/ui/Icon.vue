<template>
  <component :is="tag"></component>
</template>

<script>

export default {
  name: 'c-icon',
  props: {
    tag: {
      type: Function
    }
  }
}
</script>

<style>

</style>