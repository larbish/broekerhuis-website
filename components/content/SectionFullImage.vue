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
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
  }
}
</style>