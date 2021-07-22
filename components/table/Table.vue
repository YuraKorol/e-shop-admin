<template>
  <table stickyHeader="true" class="table table-hover bg-white mt-4">
    <HeaderTable :columns="columns" :actions="actions"></HeaderTable>
    <BodyTable
      :rows="rows"
      :columns="columns"
      :actions="actions"
      @click="itemAction($event)"
    ></BodyTable>
  </table>
</template>

<script>

export default {
  name: 'Table',
  methods: {
    itemAction({ id, action }) {
      this.$emit(`on${action}`, id)
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  components: {
    HeaderTable: () => import('./components/HeaderTable.vue'),
    BodyTable: () => import('./components/BodyTable.vue')
  }
}
</script>

<style lang='scss' type="text/scss" scoped>
@import "@/styles/global.scss";

.table {
  border: 1px solid $light-gray;
  width: 76vw;
}
</style>