<script setup lang="ts">
import type { BaseSectionProps } from '@/types/props'
const { background = false, backgroundPosition = "top" } = defineProps<BaseSectionProps>()
</script>

<template>
  <section
    :class="['section', { 'section--background': background }, { [`section--background-${backgroundPosition}`]: backgroundPosition }]">
    <slot />
  </section>
</template>

<style>
.section {
  position: relative;
  padding-block: 3rem;

  &--background {
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      width: 100%;
      left: 0;
      top: 0;
      background-color: #B9B59F;
    }

    &-top,
    &-bottom {
      &::after {
        height: 50%;
      }
    }

    &-bottom {
      &::after {
        top: auto;
        bottom: 0;
      }
    }

    &-full {
      &::after {
        height: 100%;
      }
    }
  }
}
</style>