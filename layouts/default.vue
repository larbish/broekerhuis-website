<script setup lang="ts">
const { data } = await useAsyncData('navigation', async () => {
  const nav = await queryCollectionNavigation('content');

  const flattenNav = (items) => {
    return items.reduce((acc, item) => {
      if (item.displayInTopNav === true) {
        acc.push(item);
      }
      if (item.children && item.children.length > 0) {
        acc = acc.concat(flattenNav(item.children));
      }
      return acc;
    }, []);
  };

  const flatNav = flattenNav(nav);

  const uniqueNav = flatNav.filter(
    (item, index, self) => index === self.findIndex((t) => t.path === item.path)
  );

  return uniqueNav.sort((a, b) => a.topNavOrder - b.topNavOrder);

});

const firstNavItems = computed(() => {
  const halfCount = Math.ceil(data.value.length / 2);
  return data.value.slice(0, halfCount);
});
const secondNavItems = computed(() => {
  const halfCount = Math.ceil(data.value.length / 2);
  return data.value.slice(halfCount);
});
</script>

<template>
  <div class="layout">
    <nav class="top-nav">
      <div class="top-nav__items top-nav__items--left">
        <div class="top-nav__item" v-for="item in firstNavItems" :key="item.path">
          <nuxt-link :to="item.path" class="top-nav__link">
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>
      <nuxt-link to="/">
        <SvgoHetBroekerHuisLogo :font-controlled="false" class="top-nav__logo" />
      </nuxt-link>
      <div class="top-nav__items top-nav__items--right">
        <div v-for="item in secondNavItems" :key="item.path" class="top-nav__item">
          <nuxt-link :to="item.path" class="top-nav__link">
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>
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
  grid-template-columns: repeat(var(--columns, 24), 1fr);
}

.header,
.main {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}

@keyframes grow-progress {
  0% {
    opacity: 0;
  }

  2% {
    opacity: 1;
  }
}

.top-nav {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  grid-column: 1 / -1;
  padding: 1.5rem 0;

  &:before {
    display: block;
    position: absolute;
    content: '';
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: linear-gradient(180deg, rgba(46, 50, 45, 0.90) 0%, rgba(46, 50, 45, 0.80) 100%);
    backdrop-filter: blur(4px);
    animation: grow-progress auto linear;
    animation-timeline: --page-scroll;
  }


  &__logo {
    width: 3.33vw;
    color: var(--color-white, #fff);
    margin-left: 50%;
    transform: translateX(-50%);
  }

  &__items {
    position: absolute;
    top: 50%;
    display: flex;
    flex-flow: row nowrap;
    gap: 0.75rem;

    &--left {
      right: 50%;
      justify-content: flex-end;
      transform: translate(calc((-3.33vw / 2) - 3rem), -50%);
    }

    &--right {
      left: 50%;
      justify-content: flex-start;
      transform: translate(calc((3.33vw / 2) + 3rem), -50%);
    }
  }

  &__item,
  &__link {
    color: var(--color-white, #fff);
  }

  &__item {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.75rem;
    color: var(--color-white, #fff);


    &:after {
      content: '●';
    }

    &:last-child {
      &:after {
        display: none;
      }
    }
  }

  &__link {
    text-transform: uppercase;
    font-size: 1rem;
    text-decoration: none;
    letter-spacing: -0.32px;
    font-weight: 450;
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
