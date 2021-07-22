<template>
  <FormPage>
    <Card>
      <!-- <FormGenerator
        v-if="model"
        :schema="schema"
        :model="model"
        :title="config.formName"
        @onSubmit="onSubmitForm"
        :isUpdated="isUpdated"
      /> -->
    </Card>
  </FormPage>
</template>

<script>
import { crudMixin }from '@/mixins/crud.mixin'
import { config }from '../config'
import { schema, data }from './fields'

export default {
  middleware: 'auth',
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
