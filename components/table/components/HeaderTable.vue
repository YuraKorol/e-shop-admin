<template>
  <thead>
    <tr>
      <HeaderCell>№</HeaderCell>
      <HeaderCell v-for="column in columns" :key="`column-${column._id}`">{{ column.name }}</HeaderCell>
      <HeaderCell v-if="actions.length > 0" :colspan="actions.length" class="text-center">Actions</HeaderCell>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  components: {
    HeaderCell: () => import('./cells/HeaderCell.vue')
  }
}
</script>

<style>

</style>