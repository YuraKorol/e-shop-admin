<template>
  <div class="app flex min-h-screen">
    <AssideMenu class="asside_menu_container" :menu="menu" />
    <div class="main_content_container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import menu from '@/utils/menuNavigationItems'

export default {
  components: {
    AssideMenu: () => import('@/components/layouts/Navigation/AssideMenu.vue')
  },
  data() {
    return {
      menu
    }
  }
}
</script>

<style lang="scss" type="text/scss">
@import "@/styles/global.scss";

.app {
  overflow-x: hidden;
}
.asside_menu_container {
  width: 15vw;
}
.main_content_container {
  width: 85vw;
  background: $main-bg;
}
</style>
