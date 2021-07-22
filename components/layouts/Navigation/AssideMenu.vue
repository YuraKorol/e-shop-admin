<template>
  <div class="flex justify-center shadow p-3 mr-1">
    <nav class="flex flex-col justify-between fixed top-0 h-screen py-4">
      <div>
        <AssideNavigationItem
          v-for="item in menu"
          :key="item._id"
          :path="item.path"
        >
          {{ item.name }}
        </AssideNavigationItem>
      </div>
      <c-button
        :bg="'red'"
        rounded
        @click="logout()"
      >Logout</c-button>
    </nav>
  </div>
</template>

<script>

export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  components: {
    AssideNavigationItem: () => import('./AssideNavigationItem.vue')
  }
}
</script>

<style>

</style>