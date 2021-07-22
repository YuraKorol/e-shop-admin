<template>
  <div class="py-4 px-6">
    <h2 class="text-center font-medium text-2xl">{{ title }}</h2>
    <form @submit.prevent="validate">
      <c-input
        v-for="field in schema"
        :key="field.model"
        :type="field.type"
        :label="field.label"
        :placeholder="field.placeholder"
        :model="field.model"
        :styleClasses="field.styleClasses"
      ></c-input>
      <div class="flex">
        <c-button
          class="m-auto"
          rounded
          :bg="'green'"
          type="submit"
        >{{ isUpdated ? 'Edit' : 'Create' }}</c-button>
        <c-button
          class="m-auto"
          rounded
          :bg="'red'"
          type="button"
          @click="$router.back()"
        >Back</c-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    schema: {
      type: Array,
      default: () => []
    },
    model: {
      type: Array,
      default: () => []
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
