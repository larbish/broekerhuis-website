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
  grid-template-rows: 1fr 1fr;
  grid-column: 1 / -1;
  background-color: var(--color-primary, #000000);

  @media (width > 768px) {
    grid-template-rows: 1fr;
  }

  &__title,
  &__tagline {
    position: absolute;
    z-index: 3;
    color: var(--color-white, #FFFFFF);
    text-align: center;
  }

  &__title {
    font-size: clamp(2rem, 8vw, 6rem);
    line-height: 1.1;
    grid-column: 5 / -5;
    top: 50%;
    transform: translateY(-50%);
  }

  &__tagline {
    grid-column: 3 / span 20;
    bottom: 5%;
    text-align: left;
    line-height: 0.75;
    font-family: var(--tagline-font-family, 'Lora');
    font-size: clamp(1.6rem, 4vw, 3rem);
    letter-spacing: -1.92px;
    font-weight: 500;

    @media (width > 768px) {
      grid-column: 3 / span 7;
      bottom: 15%;
    }
  }

  &__image {
    position: relative;
    z-index: 1;
    grid-column: 1 / -1;
    aspect-ratio: 16 / 9;
    grid-row: 2;

    &:after,
    &:before {
      position: absolute;
      z-index: 1;
      content: '';
      display: block;
      width: 100%;
      height: 50%;
    }

    &:after {
      bottom: 0;
      left: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.00) 100%);
    }

    &:before {
      top: 0;
      left: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);
    }


    @media (width > 768px) {
      grid-row: 1;
      aspect-ratio: 4 / 3;
      grid-column: 13 / span 12;

      &--reverse {
        grid-column: 1 / span 12;
      }

      &:after,
      &:before {
        display: none;
      }
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