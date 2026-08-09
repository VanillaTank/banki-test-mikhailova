<template>
  <div class="nav-mobile">
    <div
      class="burger"
      @click="showMobileMenu = true"
    >
      <div class="burger__line"></div>
      <div class="burger__line"></div>
      <div class="burger__line"></div>
    </div>

    <div
      class="nav-mobile__back"
      v-if="showMobileMenu"
    >
      <transition name="left-slide">
        <div class="nav-mobile__sidebar">
          <CloseIcon
            class="nav-mobile__close-icon"
            @click="showMobileMenu = false"
          />
          <nav
            class="nav-mobile__list"
          >
            <RouterLink
              v-for="(item, index) in menuItems"
              :key="index"
              class="nav-mobile__list-link"
              :to="item.path"
              @click.native="showMobileMenu = false"
            >
              {{ item.title }}
            </RouterLink>
          </nav>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/assets/icons/close.svg'

export default {
  name: 'MobileNav',
  components: {
    CloseIcon,
  },
  props: {
    menuItems: { type: Array, default: () => [] },
  },
  data () {
    return {
      showMobileMenu: false,
    }
  },
}
</script>

<style lang="scss">
.nav-mobile {
  .burger {
    width: 25px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__line {
      height: 2px;
      background: colors('btn', 'primary');
    }

    &:hover {
      &__line {
        background: colors('btn', 'hover');
      }
    }
  }

  // анимация
  .left-slide-enter-active,
  .left-slide-leave-active{
    transition: all 3s ease;
  }

  .left-slide-enter,
  .left-slide-leave-to {
    opacity: 0;
  }

  .left-slide-enter {
    transform: translateX(100%);
  }

  .left-slide-leave-to {
    transform: translateX(-100%);
  }
  // конец анимации

  &__back {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: colors('background', 'back');
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  &__sidebar {
    position: relative;
    width: 300px;
    background: colors('background', 'dark');
    height: 100%;
    padding: 35px;
  }

  &__close-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    fill: colors('btn', 'primary');
    cursor: pointer;

    &:hover {
      fill: colors('btn', 'hover');
    }
  }

  &__list-link {
    padding: 10px 0;
    display: block;
  }
}
</style>