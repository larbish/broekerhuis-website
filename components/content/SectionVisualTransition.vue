<script setup lang="ts">
import type { BaseSectionProps } from '@/types/props'

interface Props extends BaseSectionProps {
  images: string[]
}

const { background = false, backgroundPosition = "bottom" } = defineProps<Props>();
</script>

<template>
  <SectionBase class="section--full-width visual-transition" :background :background-position>
    <template v-for="image in images" :key="image">
      <NuxtImg class="visual-transition__image" :src="image" />
    </template>
  </SectionBase>
</template>

<style>
.visual-transition {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  padding-block: 3rem 6rem;
  gap: var(--column-width, 3vw);

  &__image {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 4 / 5;
    object-position: center;

    &:nth-child(even) {
      transform: translateY(var(--column-width, 3vw));
    }

    &:first-child {
      margin-left: calc(var(--column-width, 3vw) / -2);
    }

    &:last-child {
      margin-right: calc(var(--column-width, 3vw) / -2);
    }
  }
}
</style>