<template>
  <transition name="modal">
    <div class="modal__mask">
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
}
</script>

<style lang="scss" scoped>
.modal{
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: color('background', 'back');
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
  }
  
  &__container {
    min-width: 300px;
    max-width: 700px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  &__body {
    margin: 20px 30px;
  }
}

// анимация
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
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
    fill: color('btn', 'primary');
    cursor: pointer;

    &:hover {
      fill: color('btn', 'hover');
    }
  }
}
</style>