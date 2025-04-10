<script lang="ts" setup>
defineProps<{
  title?: string
  tagline?: string
}>();
</script>

<template>
  <div class="hero-header">
    <h1 class="hero-header__title">{{ title }}</h1>

    <p class="hero-header__tagline">{{ tagline }}</p>

    <div class="hero-header__image">
      <slot name="image" mdc-unwrap="p" />
    </div>

    <slot />
  </div>
</template>

<style>
.hero-header {
  position: relative;
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
  background-color: var(--color-primary, #000000);

  &__title,
  &__tagline {
    position: absolute;
    z-index: 2;
    color: var(--color-white, #FFFFFF);
    text-align: center;
  }

  &__title {
    font-size: clamp(2rem, 30vw, 6rem);
    line-height: 1.1;
    grid-column: 5 / -5;
    top: 50%;
    transform: translateY(-50%);
  }

  &__tagline {
    grid-column: 3 / span 7;
    text-align: left;
    line-height: 0.75;
    font-family: var(--tagline-font-family, 'Lora');
    font-size: clamp(1rem, 15vw, 3rem);
    letter-spacing: -1.92px;
    bottom: 15%;
    font-weight: 500;
  }

  &__image {
    z-index: 1;
    aspect-ratio: 4 / 3;
    grid-column: 13 / span 12;

    &--reverse {
      grid-column: 1 / span 12;
    }

    >img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>