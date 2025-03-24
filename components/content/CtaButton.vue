<template>
  <nuxt-link class="cta-button">
    <slot mdc-unwrap="p" />
  </nuxt-link>
</template>

<style>
.cta-button {
  display: block;
  background-color: var(--color-primary, #2E322D);
  color: var(--color-white, #FFFFFF);
  padding: 0.75rem 1rem;
  border-radius: 10rem;
}
</style>