<template>
  <div class="table-responsive flex flex-col items-center px-10 py-6">
    <h2 class="text-4xl mb-4">{{ title | firstCharUppercase }}</h2>
    <slot />
  </div>
</template>

<script>
import firstCharUppercase from '@/filters/firstCharUppercase.filter'
export default {
  name: 'default-page',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  filters: {
    firstCharUppercase
  }
}
</script>

<style>

</style>