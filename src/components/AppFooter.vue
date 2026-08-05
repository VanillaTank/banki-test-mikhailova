<template>
  <div class="footer">
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

    <div class="footer__links">

      <a
        class="footer__links-item"
        href="tel:+78125555555"
      >
        <PhoneIcon class="icon" />
        +7 (812) 555-55-55
      </a>

      <a
        class="footer__links-item"
        href="https://yandex.ru/maps/-/CTGq4C2k"
        target="_blank"
      >
        <AddressIcon class="icon" />
        г. Санкт-Петербург, ул. Ефимова, 3
      </a>
    </div>
  </div>
</template>

<script>
import PhoneIcon from '@/assets/icons/phone.svg';
import AddressIcon from '@/assets/icons/adress.svg';

export default {
  name: 'AppFooter',
  components: {
    PhoneIcon,
    AddressIcon,
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
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  background: color('background', 'dark');
  padding: 37px 0 38px;

  & .nav__item {
    color: color('text', 'secondary');
  }

  &__links {
    display: flex;
    gap: 66px;
  }

  &__links-item {
    color: color('text', 'secondary');
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>