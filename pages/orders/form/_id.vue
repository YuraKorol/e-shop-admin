<template>
  <FormPage>
    <Card>
      Orders
    </Card>
  </FormPage>
</template>

<script>
import { crudMixin }from '@/mixins/crud.mixin'
import { config }from '../config'
import { schema, data }from './fields'

export default {
  mixins: [crudMixin(config)],
  data() {
    return {
      schema,
      config,
      data
    }
  },
  components: {
    Card: () => import('@/components/ui/Card.vue'),
    FormPage: () => import('@/components/pages/FormPage.vue')
  }
}
</script>

<style></style>
