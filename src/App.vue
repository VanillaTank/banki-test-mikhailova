<template>
  <div id="app">
    <AppHeader />
    <div class="page">
      <RouterView />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: color('background', 'light');

  .page {
    flex-grow: 1;
  }
}
</style>