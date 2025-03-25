<template>
  <div class="layout">
    <nav class="top-nav">
      <SvgoHetBroekerHuisLogo :font-controlled="false" class="top-nav__logo" />
    </nav>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <div class="footer__top">
        <SvgoHetBroekerHuisWordmark :font-controlled="false" class="logo__wordmark footer__logo" />
        <div class="footer__contact">
          <a href="mailto:info@broekerhuis.nl" class="footer__link footer__link--large" target="_blank"
            rel="noopener noreferrer">info@broekerhuis.nl</a>
          <a href="tel:+31204031314" class="footer__link footer__link--large" target="_blank"
            rel="noopener noreferrer">020-4031314</a>
          <SvgoInstagram class="footer__icon footer__icon--instagram" />
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: repeat(26, 1fr);
}

.header,
.main {
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
    color: var(--color-white, #fff);
  }
}

.footer {
  display: grid;
  grid-column: 2 / -2;
  grid-template-columns: subgrid;
  margin: 96px 0;

  @media (width > 768px) {
    margin: 168px 0 90px;
    grid-column: 5 / -5;
  }

  &__top {
    grid-column: 1 / -1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--color-primary, #2E322D);
  }

  &__logo {
    display: none;
    flex: 0 0 calc(100vw / 26 * 4);
    grid-column: 1 / span 4;
    color: var(--color-primary, #2E322D);

    @media (width > 768px) {
      display: block;
    }
  }

  &__contact {
    grid-column: span 6 / -1;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;

    @media (width > 768px) {
      align-items: flex-end;
    }
  }

  &__link {
    color: var(--color-primary, #2E322D);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &--large {
      font-family: var(--title-font-family);
      font-size: 2rem;
    }
  }

  &__icon {
    width: 1.25rem;
    aspect-ratio: 1;

    &--instagram {
      fill: var(--color-primary, #2E322D);
    }
  }
}
</style>
