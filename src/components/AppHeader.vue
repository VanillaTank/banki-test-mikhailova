<template>
  <div class="header">
    <div class="header__container">
      <nav class="header__nav">
        <RouterLink
          v-for="(page, index) in pageList"
          :key="index"
          class="nav__item"
          :to="page.path"
        >
          {{ page.title }}
        </RouterLink>
      </nav>


      <MobileNav
        class="header__nav-mobile"
        :menuItems="pageList"
      />

      <div
        v-if="$route.name === 'CatalogPage'"
        class="header__search"
      >
        <AppInput
          v-model="searchText"
          class="header__search-input"
          :placeholder="placeholder"
          @keydown.enter.native="search"
        />
        <AppBtn
          class="header__search-btn"
          @click="search"
        >
          <template>Найти</template>
        </AppBtn>
      </div>
    </div>
  </div>
</template>

<script>
import AppBtn from '@/components/shared/AppBtn.vue'
import AppInput from '@/components/shared/AppInput.vue'
import MobileNav from '@/components/MobileNav.vue'
import pages from '@/utils/pages'

export default {
  name: 'AppHeader',
  components: {
    MobileNav,
    AppBtn,
    AppInput,
  },
  data () {
    return {
      pageList: pages,
      searchText: '',
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    placeholder () {
      return this.windowWidth > 460 
        ? 'Поиск по названию картины'
        : 'Поиск по названию'
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    search () {
      this.$store.dispatch('searchPicture', this.searchText)
    },
    handleResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid color('border', 'light');
  padding: 24px 0;

  &__container {
    max-width: 1236px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 49px;

    @media (max-width: 1000px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (max-width: 640px) {
      justify-content: space-between;
    }

    @media (max-width: 460px) {
      min-height: 39px;
    }
  }

  &__nav {
    @media (max-width: 1000px) {
      width: 100%;
      text-align: center;
    }

    @media (max-width: 640px) {
      display: none;
    }
  }

  &__search {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 416px;
    width: 100%;

    @media (max-width: 1060px) {
      max-width: 365px;
    }

    @media (max-width: 1000px) {
      margin-top: 22px;
    }

    @media (max-width: 460px) {
      max-width: 270px;
    }
  }

  &__nav-mobile {
    display: none;

    @media (max-width: 640px) {
      display: block;
    }
  }

  &__search-input {
    width: 100%;
  }

  &__search-btn {
    color: white;
    margin-left: -2px;
  }
}
</style>