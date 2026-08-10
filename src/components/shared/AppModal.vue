<template>
  <transition name="modal">
    <div
      class="modal__mask"
      @dragstart.prevent
    >
      <div class="modal__container">
        
        <div class="header text-h2">
          {{ title }}
          <CloseIcon
            class="header__close-icon"
            @click="$emit('close')"
          />
        </div>

        <div class="modal__body">
          <slot name="body" />
        </div>

        <div>
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CloseIcon from '@/assets/icons/close.svg'

export default {
  name: 'AppModal',
  components: { 
    CloseIcon,
  },
  props: {
    title: { type: String, default: '' },
  },
  created() {
    document.body.style.overflow = 'hidden'
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingRight = `${scrollBarWidth}px`
  },
  beforeDestroy() {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  },
}
</script>

<style lang="scss">
* {
  -webkit-user-drag: none;
  user-drag: none;
  user-select: text;
}
.modal{
  &__mask {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: colors('background', 'back');
    display: flex;
    justify-content: center;
    transition: opacity 0.3s ease;
    padding: 20px;
    overflow-y: auto;
  }
  
  &__container {
    min-width: 200px;
    max-width: 700px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    margin: auto;
  }

  &__body {
    margin: 20px 30px 30px;

    @media (max-width: 500px) {
      margin-bottom: 20px;
    }
  }
}

// анимация
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter-active .modal__container,
.modal-leave-active .modal__container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.header {
  position: relative;
  padding: 25px 25px 10px 10px;
  text-align: center;

  &__close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    fill: colors('btn', 'primary');
    cursor: pointer;

    &:hover {
      fill: colors('btn', 'hover');
    }
  }
}
</style>