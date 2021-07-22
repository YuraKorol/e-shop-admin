<template>
  <div class="py-4 px-6">
    <h2 class="text-center font-medium text-2xl">{{ title }}</h2>
    <ValidationObserver ref="authForm" slim>
      <form @submit.prevent="onSubmit">
        <c-input
          v-for="field in schema"
          :key="field.model"
          :type="field.type"
          :label="field.label"
          :name="field.name"
          :placeholder="field.placeholder"
          :styleClasses="field.styleClasses"
          :validation="field.validation"
          :data.sync="data[field.name]"
        ></c-input>
        <div class="flex sm:justify-between sm:items-center sm:flex-row flex-col-reverse text-center">
          <nuxt-link
            no-prefetch
            :to="whatIsAuthPage"
            class="text-xs mt-4 sm:mb-6 sm:mr-6"
          >
            {{ $route.path === '/login' ? 'Are you not registered?' : 'Do you already have an account?' }}
          </nuxt-link>
          <c-button
            rounded
            :bg="'purple'"
            type="submit"
          >
            {{ $route.path === '/login' ? 'SignIn' : 'SignUp' }}
          </c-button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver }from 'vee-validate'
export default {
  computed: {
    whatIsAuthPage() {
      if (this.$route.path === '/login') {
        return '/signup'
      }
      if (this.$route.path === '/signup') {
        return '/login'
      }
      return ''
    }
  },
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.authForm.validate()
      if (isValid) {
        this.$emit('login')
      }
    }
  },
  components: {
    ValidationObserver
  },
  props: {
    schema: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    isUpdated: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>