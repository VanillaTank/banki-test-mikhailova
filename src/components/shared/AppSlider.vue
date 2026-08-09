<template>
  <div class="slider">
    <AngleIcon
      class="slider__btn slider__btn--prev"
      @click="goPrev"
    />
    <div
      class="slider__content"
      @touchstart="touchStartPoint = $event.touches[0].clientX"
      @touchend="handleTouchEnd"
    >
      <transition :name="transitionName" mode="out-in">
        <img
          :key="activeIndex"
          :src="slides[activeIndex].path"
          :alt="slides[activeIndex].alt"
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

const SWIPE_THRESHOLD_PX = 100

export default {
  name: 'AppSlider',
  components: {
    AngleIcon,
  },
  props: {
    slides: { type: Array, require: true },
  },
  computed: {
    lastIndex () {
      return this.slides.length - 1
    },
    transitionName () {
      return this.direction === 1 ? 'slide-left' : 'slide-right'
    },
  },
  data () {
    return {
      activeIndex: 0,
      direction: 1, // 1 = вперёд, -1 = назад
      touchStartPoint: 0,
    }
  },
  methods: {
    handleTouchEnd (event) {
      const touchEndPoint = event.changedTouches[0].clientX
      const distance = this.touchStartPoint - touchEndPoint

      if (Math.abs(distance) < SWIPE_THRESHOLD_PX) {
        return
      }

      distance > SWIPE_THRESHOLD_PX
        ? this.goNext()
        : this.goPrev()
    },
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
  min-height: 250px;
  overflow: hidden;

  &__btn {
    position: absolute;
    top: 50%;
    stroke: colors('btn', 'primary');
    cursor: pointer;
    z-index: 10;

    &:hover {
      stroke: colors('btn', 'hover');
    }

    @media (max-width: 756px) {
      display: none;
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
    padding: 0 30px;

    img {
      user-select: none;
      scale: 1.5;
      max-width: 100%;
      height: auto;
    }
  }
}
</style>