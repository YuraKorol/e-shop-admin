<template>
  <Page>
    <c-card>
      <FormAuth :schema="schema" :title="'Login'" :data="data" @login="onLogin(data)" />
    </c-card>
  </Page>
</template>

<script>
import { mapActions }from 'vuex'
import { schema, data }from './fields'

export default {
  name: 'login-page',
  layout: 'empty',
  data() {
    return {
      schema,
      data
    }
  },
  methods: {
    ...mapActions({
      onLogin: 'authorization/login/onLogin'
    }),
    test() {
      console.log(this.$store)
    }
  },
  components: {
    FormAuth: () => import('@/components/form/FormAuth.vue'),
    Page: () => import('@/components/pages/Page.vue')
  }
}
</script>

<style>

</style>