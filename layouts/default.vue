<template>
  <div class="layout">
    <nav class="top-nav">
      <nuxt-link to="/">
        <SvgoHetBroekerHuisLogo :font-controlled="false" class="top-nav__logo" />
      </nuxt-link>
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

          <div class="footer__opening-hours">
            <ProseP><strong>Wo - Zo van 10:00 - 00:00 uur</strong><br />
              Maandag & dinsdag gesloten voor lunch en diner - maar altijd bereikbaar voor je wildste plannen.</ProseP>

            <ProseP>Plan direct een afspraak met Jeppe of Thomas.</ProseP>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__column footer__column--wide">
          <ProseP>Het Broeker Huis is sinds 1775 het hart van Broek in Waterland. Vandaag zijn we dorpshuis, restaurant,
            trouwlocatie, vergaderplek en B&B - op 15 minuten van Amsterdam. Een monumentaal pand in het mooiste dorp
            van Nederland. Kom eten, vieren, werken en slapen. We zijn alleen voor iedereen.
          </ProseP>
        </div>

        <div class="footer__column">
          <h4 class="footer__title">Locatie & contact</h4>
          <ProseP>Het Broeker Huis <br />
            Leeteinde 16 <br />
            1151 AL Broek in Waterland <br />
            <a href="tel:+31204031314" target="_blank" rel="noopener noreferrer">020 403 1314</a><br />
            <br />
            [Whatsapp]<br />
            <a href="mailto:info@broekerhuis.nl">info@broekerhuis.nl</a>
          </ProseP>
        </div>

        <div class="footer__column">
          <h4 class="footer__title">Snel naar</h4>
          <ul>
            <li>Restaurant in Broek in Waterland </li>
            <li>Feestlocatie & trouwlocatie </li>
            <li>Vergaderlocatie & workshops </li>
            <li>Hotelkamers & overnachten </li>
            <li>Broek in Waterland </li>
            <li>Over Het Broeker Huis </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
}

.header,
.main {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}

.top-nav {
  position: fixed;
  z-index: 10;
  top: 24px;
  left: 0;
  right: 0;
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
    margin-bottom: 3rem;
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
    gap: 0.25rem;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;

    @media (width > 768px) {
      align-items: flex-end;
    }
  }

  &__link {
    font-family: var(--base-font-family);
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
      width: 20px;
      height: 20px;
      fill: var(--color-primary, #2E322D);
    }
  }

  &__opening-hours {
    text-align: right;
    max-width: 360px;
    margin-top: 1rem;

    p {
      margin-bottom: 1rem;
    }
  }

  &__bottom {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
  }

  &__column {
    grid-column: span 6;


    &:nth-child(2) {
      grid-column: 8 / span 5;
    }

    &:nth-child(3) {
      grid-column: 14 / span 5;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
}
</style>
