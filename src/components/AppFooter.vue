<template>
  <div class="footer">
    <div class="footer__wrap">
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
  </div>
</template>

<script>
import PhoneIcon from '@/assets/icons/phone.svg'
import AddressIcon from '@/assets/icons/adress.svg'
import pages from '@/utils/pages'

export default {
  name: 'AppFooter',
  components: {
    PhoneIcon,
    AddressIcon,
  },
  data () {
    return {
      pageList: pages,
    }
  },
}
</script>

<style lang="scss">
.footer {
  background: colors('background', 'dark');
  padding: 38px 0 30px;

  @media (max-width: 1100px) {
    padding: 30px 0 25px;
  }

  @media (max-width: 640px) {
    padding: 20px 0 15px;
  }

  &__wrap {
    display: flex;
    margin: 0 auto;
    max-width: 1236px;
    padding: 0 10px;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1100px) {
      justify-content: center;
    }
  }

  & .nav__item {
    color: colors('text', 'secondary');

    @media (max-width: 524px) {
      width: 100%;
      text-align: center;
      display: block;
      padding: 5px 15px;
    }
  }

  &__links {
    display: flex;
    gap: 25px;

    @media (max-width: 1100px) {
      width: 100%;
      justify-content: center;
      margin-top: 15px;
      gap: 10px;
      flex-wrap: wrap;
      flex-direction: column-reverse;
      align-items: center;
    }

    @media (max-width: 640px) {
      margin-top: 10px;
    }
  }

  &__links-item {
    color: colors('text', 'secondary');
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>