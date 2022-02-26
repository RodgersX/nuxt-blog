<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSideNav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: require('~/components/Navigation/TheHeader.vue').default,
    TheSideNav: require('~/components/Navigation/TheSidenav.vue').default,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>
<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
