<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <header class="header">
    <div class="header__wordmark">
      <SvgoHetBroekerHuisWordmark :font-controlled="false" class="header__wordmark-svg logo__wordmark" />
    </div>

    <div class="header__background">
      <NuxtImg :src="image" class="header__background-image" />
      <NuxtImg src="/images/header-overlay.svg" class="header__background-overlay" />
    </div>
  </header>
</template>

<style>
.header {
  position: relative;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: 100%;
  padding: 1rem 0;
  background: #2e322d;
  aspect-ratio: 9 / 5;

  &__wordmark {
    position: relative;
    z-index: 2;
    grid-column: 9 / span 9;
    align-self: center;
    color: var(--color-white, #fff);
  }

  &__background {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    width: 50vw;
    height: 100%;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 30%;
      background: linear-gradient(180deg,
          rgb(0 0 0 / 60%) 0%,
          rgb(0 0 0 / 0%) 100%);
      content: "";
    }

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    }
  }
}
</style>