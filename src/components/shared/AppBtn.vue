<template>
  <button
    class="app-btn"
    :class="{
      'app-btn--accent': accent,
    }"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppBtn',
  props: {
    accent: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  methods: {
    onClick () {
      if (this.disabled) return
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
  color: color('text', ligth);
  background: color('btn', 'primary');
  min-width: 118px;
  font-family: weight('bold'), serif;
  font-size: size('base');

  &--accent {
    background: color('btn', 'accent');
  }

  &:hover {
    background: color('btn', 'hover');
  }

  &:disabled {
    background: color('btn', 'disabled');
  }

  &.accent {
    background: color('btn', 'accent');
  }
}
</style>
