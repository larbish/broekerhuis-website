<script lang="ts" setup>
const { titleComponent = 'h1', subtitleComponent = 'h2' } = defineProps<{
  title: string,
  subtitle?: string,
  titleComponent?: string,
  subtitleComponent?: string,
}>()
</script>

<template>
  <section class="section section--padding-full-width intro__section">
    <div class="intro">
      <div class="intro__head">
        <component :is="titleComponent" class="intro__title title__main">{{ title }}</component>
        <component :is="subtitleComponent" v-if="subtitle" class="intro__subtitle title__sub">{{ subtitle }}</component>
      </div>
      <div class="intro__body">
        <slot />
      </div>

      <div class="intro__footer">
        <slot name="footer" />
      </div>

      <SvgoHome class="intro__icon" />
    </div>
  </section>
</template>

<style scoped>
.intro {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 2 / -2;
  text-align: center;
  gap: 1.5rem;

  @media (width > 1024px) {
    grid-column: 7 / span 12;
  }

  &__title,
  &__subtitle,
  &__head {
    grid-column: 1 / -1;
  }

  &__section {
    display: grid;
    padding: 96px 0;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;

    @media (width > 768px) {
      padding: 120px 0 56px;

    }
  }

  &__body,
  &__footer,
  &__icon {
    grid-column: 2 / -2;
  }

  &__footer {
    display: flex;
    justify-content: center;
  }

  &__icon {
    margin-top: 7.5rem;
    width: 43px;
    height: 35px;
    color: var(--color-primary, #2E322D);
    place-self: center;
  }
}
</style>
