<template>
  <Page :title="config.crudName">
    <Button
      :bg="'green'"
      :rounded="true"
      @click="$router.push('products/form')"
    >{{ `Add ${config.singleName}` }}</Button>
    <Table
      :columns="columns"
      :rows="items"
      :actions="actions"
      @onDelete="remove($event)"
      @onEdit="toEditPage($event)"
    />
  </Page>
</template>

<script>
import { mapActions, mapGetters }from 'vuex'
import { columns, actions, config }from './config.js'

export default {
  name: 'categories-page',
  data() {
    return {
      columns,
      actions,
      config
    }
  },
  methods: {
    ...mapActions({
      remove: `${config.crudName}/remove`
    }),
    toEditPage(id) {
      this.$router.push(`${config.crudName}/form/${id}`)
    }
  },
  computed: {
    ...mapGetters({
      items: `${config.crudName}/items`
    })
  },
  async asyncData({ store }) {
    await store.dispatch(`${config.crudName}/findAll`)
  },
  components: {
    Button: () => import('@/components/ui/Button.vue'),
    Page: () => import('@/components/pages/Page.vue'),
    Table: () => import('@/components/table/Table.vue')
  }
}
</script>

<style>

</style>