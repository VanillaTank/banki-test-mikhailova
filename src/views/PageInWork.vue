<template>
  <div class="page-placeholder">
    <div class="text-h2">
      Страница {{ pageName ? `«${pageName}»` : '' }} находится в разработке
    </div>
  </div>
</template>

<script>
import pages from '@/utils/pages'

export default {
  name: 'PageInWork',
  computed: {
    pageName () {
      return pages.find(({ path }) => path === this.$route.path)?.title || ''
    },
  },
}
</script>

<style lang="scss">
.page-placeholder {
  margin: 45px auto;
  max-width: 1256px;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 943px) {
    margin: 30px auto;
  }
}
</style>