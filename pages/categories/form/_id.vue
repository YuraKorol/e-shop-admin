<template>
  <FormPage>
    <Card>
      Categories
    </Card>
  </FormPage>
</template>

<script>
import { crudMixin }from '@/mixins/crud.mixin'
import { config }from '../config'
import { schema }from './fields'

export default {
  mixins: [crudMixin(config)],
  data() {
    return {
      schema,
      config
    }
  },
  components: {
    Card: () => import('@/components/ui/Card.vue'),
    FormPage: () => import('@/components/pages/FormPage.vue')
  }
}
</script>

<style></style>
