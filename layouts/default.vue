<template>
  <div class="layout">
    <nav class="top-nav">
      <NuxtImg src="/images/het-broeker-huis-logo.svg" class="top-nav__logo" />
    </nav>
    <main class="main">
      <slot />
    </main>
    <footer class="footer" />
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: repeat(26, 1fr);
}

.header,
.main,
.footer {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}

.top-nav {
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  z-index: 1;
  display: grid;
  grid-column: 1 / -1;

  &__logo {
    display: block;
    width: 3.33vw;
    margin: 0 auto;
  }
}
</style>
