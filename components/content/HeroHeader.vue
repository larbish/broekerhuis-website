<script lang="ts" setup>
defineProps<{
  title?: string
  tagline?: string
}>();
</script>

<template>
  <div class="hero-header">
    <div class="hero-header__content">
      <h1 class="hero-header__title">{{ title }}</h1>
      <p class="hero-header__tagline">{{ tagline }}</p>
    </div>

    <slot name="image" mdc-unwrap="p" />

    <slot />
  </div>
</template>

<style>
.hero-header {
  position: relative;
  display: grid;
  padding: 10rem 0 4rem;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;

  &__content {
    z-index: 2;
    grid-column: 5 / -5;
  }

  &__title,
  &__tagline {
    color: var(--color-white, #FFFFFF);
    text-align: center;

  }

  &__title {
    font-size: 6rem;
  }

  &__tagline {
    font-family: var(--tagline-font-family, 'Lora');
    font-size: 3rem;
  }

  &__image {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>