<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <section class="section section--full-width full-image">
    <NuxtImg :src="image" class="full-image__image" />
  </section>
</template>

<style>
.full-image {
  &__image {
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