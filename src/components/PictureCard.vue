<template>
  <div
    class="picture"
    :class="{
      'picture--sold': pic.isSold
    }"
  >
    <img
      class="picture__img"
      :src="pic.img"
      :alt="`Картина ${pic.name}`"
      @click="$emit('openModal', pic.id)"
    />

    <div class="picture__info">
      <h2
        class="text-h2 picture__info-name"
        @click="$emit('openModal', pic.id)"
      >
        «{{ pic.name }}»<br/>
        {{ pic.author }}
      </h2>

      <div
        v-if="pic.isSold"
        class="picture__sold"
      >
        <h3
          class="text-h3"
        >
          Продана на аукционе
        </h3>
      </div>

      <div
        v-else
        class="picture__sell"
      >
        <div>
          <span
            v-if="pic.prevCost"
            class="picture__prev-cost"
          >{{ pic.prevCost }}$</span>
          <h3 class="text-h3">{{ pic.cost }}$</h3>
        </div>

        <AppBtn
          class="picture__btn"
          :accent="pic.isInCart"
          :is-loading="inCartLoading"
          @click="onClick"
        >
          <template v-if="pic.isInCart">
            <CheckIcon
              class="picture__btn-icon"
              width="20"
              height="20"
            />
            В корзине
          </template>
          <template v-else>
            Купить
          </template>
        </AppBtn>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AppBtn from '@/components/shared/AppBtn.vue'
import CheckIcon from '@/assets/icons/check.svg'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'PictureCard',
  components: {
    AppBtn,
    CheckIcon,
  },
  props: {
    pic: { type: Object, required: true },
  },
  data () {
    return {
      inCartLoading: false,
    }
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
    onClick () {
      this.inCartLoading = true
      this.pic.isInCart
        ? this.removeFromCart(this.pic.id).then(() => this.inCartLoading = false)
        : this.addToCart(this.pic.id).then(() => this.inCartLoading = false)
    },
  },
})
</script>

<style lang="scss">
.picture {
  width: 280px;
  border: 1px solid color('border', 'light');

  &--sold {
    opacity: .5;
  }

  &__img {
    border-bottom: 1px solid color('border', 'light');
    height: 160px;
  }

  &__info {
    padding: 14px 24px 26px;
  }

  &__info-name {
    margin-bottom: 22px;
  }

  &__sold {
    height: 49px;
    display: flex;
    align-items: center;
  }

  &__sell {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  &__prev-cost {
    color: color('text', 'muted');
    position: relative;

    &::before {
      content: '';
      position: absolute;
      background: color('text', 'muted');
      left: 0;
      width: 100%;
      height: 1px;
      top: 50%;
    }
  }

  &__btn-icon {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
}
</style>