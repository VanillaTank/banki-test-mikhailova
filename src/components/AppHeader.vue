<template>
  <div class="header">
    <div class="container">
      <nav class="nav">
        <RouterLink
          v-for="(page, index) in pageList"
          :key="index"
          class="nav__item"
          :to="page.path"
        >
          {{ page.title }}
        </RouterLink>
      </nav>

      <div class="header__search">
        <AppInput
          v-model="searchText"
          class="header__search-input"
          placeholder="Поиск по названию картины"
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

export default {
  name: 'AppHeader',
  components: {
    AppBtn,
    AppInput,
  },
  data () {
    return {
      pageList: [
        { title: 'Каталог', path: '/' },
        { title: 'Доставка', path: '/delivery' },
        { title: 'Оплата', path: '/pay' },
        { title: 'Контакты', path: '/contacts' },
        { title: 'О компании', path: '/about' },
      ],
      searchText: '',
    }
  },
  methods: {
    search () {
      this.$store.dispatch('searchPicture', this.searchText)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid color('border', 'light');
  padding: 24px 0;

  & .container {
    max-width: 1236px;
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__search {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 416px;
    width: 100%;
  }

  &__search-input {
    width: stretch;
  }

  &__search-btn {
    color: white;
    margin-left: -2px;
  }
}
</style>