<template>
  <input
    class="app-input"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "AppInput",
  props: {
    value: { type: String, required: true, },
    placeholder: {
      type: String,
      default: 'Введите значение',
    },
  },
}
</script>

<style lang="scss">
.app-input {
    outline: none;
    border: 1px solid color('border', 'light');
    padding: 13px 16px 13px 18px;
    font-size: size('base');
    color: color('text', 'primary');

    &:focus {
      border: 1px solid color('border', 'dark');
    }

    &::placeholder {
      font-size: size('base');
      color: color('text', 'placeholder');
      opacity: 1; // сброс прозрачности для Firefox
    }
}
</style>