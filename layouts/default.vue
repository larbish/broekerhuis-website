<template>
  <div class="layout">
    <header class="header">
      <nav class="topnav">
        <NuxtImg src="/images/het-broeker-huis-logo.svg" class="topnav__logo" />
      </nav>
      <div class="header__wordmark">
        <NuxtImg
          src="/images/het-broeker-huis-wordmark.svg"
          class="header__wordmark-image"
        />
      </div>

      <div class="header__background">
        <NuxtImg src="/images/IMG_5047.jpeg" class="header__background-image" />
        <NuxtImg
          src="/images/header-overlay.svg"
          class="header__background-overlay"
        />
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">Footer</footer>
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

.header {
  position: relative;
  display: grid;
  grid-template-rows: fit-content(100%) auto;
  padding: 1rem 0;
  background: #2e322d;
  aspect-ratio: 9 / 5;

  &__wordmark {
    position: relative;
    z-index: 1;
    display: block;
    grid-column: 9 / span 9;
    align-self: center;

    &-image {
      width: 100%;
    }
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
      background: linear-gradient(
        180deg,
        rgb(0 0 0 / 60%) 0%,
        rgb(0 0 0 / 0%) 100%
      );
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

.topnav {
  position: relative;
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
