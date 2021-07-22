<template>
  <client-only placeholder="Loading...">
    <Page :title="'Main'" style="height: 150vh">
    </Page>
  </client-only>
</template>

<script>
export default {
  name: 'main-page',
  components: {
    Page: () => import('@/components/pages/Page.vue')
  }
}
</script>

<style>

</style>
