<template>
  <tbody>
    <tr v-if="!rows.length">
      <BodyCell
        style="text-align: center"
        :colspan="actions.length > 0 ? columns.length + 2 : columns.length + 1"
      >No one product!</BodyCell>
    </tr>
    <tr
      v-else-if="rows.length"
      v-for="(row, index) in rows"
      :key="`row-${row._id}`"
    >
      <BodyCell>{{ index + 1 }}</BodyCell>
      <BodyCell v-for="column in columns" :key="`column-${column._id}`">{{ row[column.key] }}</BodyCell>
      <BodyCell v-for="action in actions" :key="`action-${action._id}`">
        <Button
          :rounded="true"
          :bg="action.bg"
          class="mx-auto"
          @click="$emit('click', { id: row._id, action: action.action })"
        >
          <Icon name="icon" :tag="action.icon" />
          {{ action.label }}
        </Button>
      </BodyCell>
    </tr>
    <b-spinner v-else label="Spinning"></b-spinner>
  </tbody>
</template>

<script>
export default {
  name: 'BodyTable',
  props: {
    rows: {
      type: Array,
      default: () => []
    },
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
    Button: () => import('@/components/ui/Button.vue'),
    BodyCell: () => import('./cells/BodyCell.vue'),
    Icon: () => import('@/components/ui/Icon.vue')
  }
}
</script>

<style>

</style>