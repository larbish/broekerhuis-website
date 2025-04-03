<script setup lang="ts">
const { arrow = false } = defineProps<{
  arrow?: boolean
}>();
</script>

<template>
  <div :class="['cta-button', { 'cta-button--icon': arrow }]">
    <slot mdc-unwrap="p" />
    <svgo-arrow v-if="arrow" class="cta-button__arrow" />
  </div>
</template>

<style>
.cta-button {
  position: relative;
  color: var(--color-white, #FFFFFF);

  a {
    display: block;
    background-color: var(--color-primary, #2E322D);
    padding: 0.75rem 1rem;
    border-radius: 10rem;
    transition: 200ms;
    text-decoration: none;
    color: inherit;
    text-decoration: none;
  }

  &--icon {
    a {
      padding: 0.75rem 3.5rem 0.75rem 1rem;
    }
  }

  &__arrow {
    position: absolute;
    pointer-events: none;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    transition: 200ms;
  }

  @media (hover: hover) {
    &:hover {
      a {}

      .cta-button__arrow {
        transform: translateY(-50%) translateX(0.5rem);
      }
    }
  }
}
</style>