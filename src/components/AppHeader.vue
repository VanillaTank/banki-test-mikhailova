<template>
  <div class="header">
    <nav class="nav">
      <router-link
        v-for="(page, index) in pageList"
        :key="index"
        class="nav__item"
        :to="page.path"
      >
        {{ page.title }}
      </router-link>
    </nav>

    <div class="header__search">
      <AppInput
        v-model="searchText"
        placeholder="Поиск по названию картины"
      />
      <AppBtn
        class="header__search-btn"
      >
        <template>Найти</template>
      </AppBtn>
    </div>
  </div>
</template>

<script>
import AppBtn from "@/components/shared/AppBtn.vue";
import AppInput from "@/components/shared/AppInput.vue";

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
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid color('border', 'light');
  padding: 37px 0 38px;

  &__search {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__search-btn {
    color: white;
    margin-left: -2px;
  }
}
</style>