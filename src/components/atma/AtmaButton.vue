<template>
  <button :class="['atma-button', `atma-button--${props.variant}`]">
    <vue-feather v-if="icon" :type="icon" size="18" />
    {{ title }}
  </button>
</template>

<script setup>
import VueFeather from 'vue-feather';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary'
  }
});
</script>

<style lang="scss" scoped>
.atma-button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 18px;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  border-radius: 12px;
  border: 0;

  cursor: pointer;

  &--primary {
    border: 1px solid var(--button-primary);
    background: var(--button-primary);
    color: var(--white);

    &:hover {
      border-color: var(--button-primary-hover);
      background: var(--button-primary-hover);
    }

    &:active {
      border-color: var(--button-primary-active);
      background: var(--button-primary-active);
    }
  }

  &--secondary {
    border: 1px solid var(--button-primary);
    background: var(--button-secondary);
    color: var(--button-primary);

    &:hover {
      background: var(--button-secondary-hover);
    }

    &:active {
      background: var(--button-secondary-active);
    }
  }
}
</style>
