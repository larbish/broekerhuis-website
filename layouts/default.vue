<template>
  <div>
    <nav>
      <NuxtImg src="/images/het-broeker-huis-logo.svg" class="topnav__logo" />
    </nav>
    <slot />
    footer
  </div>
</template>

<style>
.topnav {
  &__logo {
    display: block;
    margin: 0 auto;
  }
}
</style>