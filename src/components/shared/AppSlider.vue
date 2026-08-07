<template>
  <div class="slider">
    <AngleIcon
      class="slider__btn slider__btn--prev"
      @click="goPrev"
    />
    <div class="slider__content">
      <transition :name="transitionName" mode="out-in">
        <img
          :key="activeIndex"
          :src="paths[activeIndex]"
          alt=""
        />
      </transition>
    </div>
    <AngleIcon
      class="slider__btn slider__btn--next"
      @click="goNext"
    />
  </div>
</template>

<script>
import AngleIcon from '@/assets/icons/angle.svg'

export default {
  name: 'AppSlider',
  components: {
    AngleIcon,
  },
  props: {
    paths: { type: Array, require: true },
  },
  computed: {
    lastIndex () {
      return this.paths.length - 1
    },
    transitionName () {
      return this.direction === 1 ? 'slide-left' : 'slide-right'
    },
  },
  data () {
    return {
      activeIndex: 0,
      direction: 1, // 1 = вперёд, -1 = назад
    }
  },
  methods: {
    goPrev () {
      this.direction = -1
      if (this.activeIndex === 0) {
        this.activeIndex = this.lastIndex
      } else {
        this.activeIndex--
      }
    },
    goNext () {
      this.direction = 1
      if (this.activeIndex === this.lastIndex) {
        this.activeIndex = 0
      } else {
        this.activeIndex++
      }
    },
  },
} 
</script>

<style lang="scss">
// анимация
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}
.slide-left-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
// конец анимации

.slider {
  position: relative;
  min-height: 200px;
  overflow: hidden;

  &__btn {
    position: absolute;
    top: 50%;
    stroke: color('btn', 'primary');
    cursor: pointer;
    z-index: 10;

    &:hover {
      stroke: color('btn', 'hover');
    }
  }

  &__btn--prev {
    -webkit-transform: translateY(-50%) rotate(90deg);
    transform: translateY(-50%) rotate(90deg);
    left: 0;
  }

  &__btn--next {
    -webkit-transform: translateY(-50%) rotate(270deg);
    transform: translateY(-50%) rotate(270deg);
    right: 0;
  }

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      user-select: none;
      object-fit: cover;
    }
  }
}
</style>