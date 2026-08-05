<template>
  <div class="catalog">
    <h1 class="text-h1 catalog__header">Картины эпохи Возрождения</h1>

    <div class="catalog__pictures">
      <div
          v-for="pic in pictures"
          :key="pic.id"
          class="picture"
          :class="{
            'picture--sold': pic.isSold
          }"
      >
        <img
            class="picture__img"
            :src="pic.img"
            :alt="`Картина ${pic.name}`"
        />

        <div class="picture__info">
          <h2 class="text-h2 picture__info-name">
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
    </div>
  </div>
</template>

<script>
import { pictures } from '@/mockData'
import AppBtn from "@/components/shared/AppBtn.vue";
import CheckIcon from '@/assets/icons/check.svg';

export default {
  name: 'CatalogPage',
  components: {
    AppBtn,
    CheckIcon,
  },
  data () {
    return {
      pictures,
    }
  }
}
</script>

<style lang="scss">
.catalog {
  margin: 45px auto;
  max-width: 1236px;
  padding: 0 10px;

  &__header {
    margin-bottom: 36px;
  }
  &__pictures {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
  & .picture {
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
}
</style>