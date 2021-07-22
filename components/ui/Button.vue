<template>
  <button
    class="flex items-center justify-center py-2 px-4 tracking-wide"
    :class="{
      [`bg-${bg}-600`]: true,
      [`hover:bg-${bg}-500`]: true,
      [`font-${font}`]: true,
      [`text-${color}`]: true,
      [`h-${height}`]: true,
      'rounded': rounded,
    }"
    @click="$emit('click')"
  >
    <span v-if="icon" class="flex items-center mr-2">
      <slot name="icon" />
    </span>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'c-button',
  props: {
    bg: {
      type: String,
      default: 'transparent'
    },
    font: {
      type: String,
      default: 'medium'
    },
    color: {
      type: String,
      default: 'white'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style>

</style>