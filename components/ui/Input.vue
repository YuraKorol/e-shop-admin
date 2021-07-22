<template>
  <div
    class="flex flex-col justify w-full sm:w-auto"
    :class="styleClasses"
  >
    <label v-if="label" :for="name">{{ label }}</label>
    <ValidationProvider
      :name="name"
      :rules="validation"
      mode="eager"
      v-slot="{ errors }"
      class="flex flex-col"
    >
      <input
        :type="type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        class="text-left py-1 px-2 rounded border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        v-model="newData"
        @input="$emit('update:data', $event.target.value)"
      />
      <small
        class="text-danger"
        v-for="(error, index) in errors"
        :key="`error-${index}`"
        v-show="errors"
      >
        {{ error }}
      </small>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider }from 'vee-validate'

export default {
  name: 'c-input',
  data() {
    return {
      newData: this.data
    }
  },
  components: {
    ValidationProvider
  },
  props: {
    data: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    styleClasses: {
      type: String,
      default: ''
    },
    validation: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>