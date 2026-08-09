<template>
  <button
    class="app-btn"
    :class="{
      'app-btn--accent': accent,
      'app-btn--loading': isLoading,
    }"
    :disabled="disabled"
    @click="onClick"
  >
    <span
      v-if="isLoading"
      class="app-btn__spinner"
    >
      <span
        class="spinner-self"
      />
    </span>
    <slot v-else/>
  </button>
</template>

<script>
export default {
  name: 'AppBtn',
  props: {
    accent: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
  },
  methods: {
    onClick () {
      if (this.disabled || this.isLoading) return
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss">
.app-btn {
  outline: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
  transition: .3s;
  padding: 14px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: colors('text', ligth);
  background: colors('btn', 'primary');
  min-width: 118px;
  min-height: 48px;
  font-family: weight('bold'), serif;
  font-size: size('base');

  @media (max-width: 460px) {
    min-height: 39px;
    min-width: 98px;
    padding: 9px 5px;
  }

  &--accent {
    background: colors('btn', 'accent');
  }

  &--loading {
    cursor: default;
  }

  &:hover:not(.app-btn--loading) {
    background: colors('btn', 'hover');
  }

  &:disabled {
    background: colors('btn', 'disabled');
  }

  &.accent {
    background: colors('btn', 'accent');
  }

  &__spinner {
    position: relative;
    display: block;
  }

  & .spinner-self {
    color: colors('text', 'ligth');
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-width: 2px;
    border-style: solid;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1.7s linear infinite;
    width: 15px;
    height: 15px;
  }

  @keyframes spin {
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
}
</style>
