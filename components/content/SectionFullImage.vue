<script setup lang="ts">
const { background = false } = defineProps<{
  image: string
  background?: boolean
  backgroundPosition?: "full" | "top" | "bottom"
}>()
</script>

<template>
  <section :class="['section', 'section--padding-full-width', 'full-image', { 'full-image--background': background }]">
    <NuxtImg :src="image" class="full-image__image" />
  </section>
</template>

<style>
.full-image {
  position: relative;
  padding-block: 3rem;

  &--background {
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      height: 50%;
      width: 100%;
      left: 0;
      top: 0;
      background-color: #B9B59F;
    }
  }

  &__image {
    position: relative;
    z-index: 2;
    display: block;
    width: 100%;
    height: 80svh;
    object-fit: cover;
    object-position: center;

    @media (width > 768px) {
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }
}
</style>