<script setup lang="ts">
const { arrow = true } = defineProps<{
  arrow?: boolean
}>();
</script>

<template>
  <nuxt-link class="cta-button">
    <slot mdc-unwrap="p" />
    <svgo-arrow v-if="arrow" class="cta-button__arrow" />
  </nuxt-link>
</template>

<style>
.cta-button {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--color-primary, #2E322D);
  color: var(--color-white, #FFFFFF);
  padding: 0.75rem 1rem;
  border-radius: 10rem;
  transition: 200ms;
  text-decoration: none;
  ;

  @media (hover: hover) {
    &:hover {
      gap: 1rem;
      background-color: var(--color-primary-dark, #2E322D);
    }
  }
}
</style>