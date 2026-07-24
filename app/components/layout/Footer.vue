<script setup lang="ts">
  import { COMPANY_CONTACTS } from '~/constants/company'

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const navLinks = [
    { title: 'Home', to: '/' },
    { title: 'Blog', to: '/blog' },
    { title: 'Sale', to: '/sale' },
    { title: 'About us', to: '/about' }
  ] as const

  const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <UiContainer>
      <div class="footer__inner">
        <div class="footer__brand">
          <UiLogo class="footer__logo" />
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li v-for="navLink in navLinks" :key="navLink.to" class="footer__nav-item">
                <NuxtLink :to="navLink.to" class="footer__nav-link">{{ navLink.title }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__column">
          <div class="footer__group">
            <span class="footer__label">Contact us</span>
            <a :href="`tel:${COMPANY_CONTACTS.phone}`" class="footer__link">
              {{ COMPANY_CONTACTS.phone }}
            </a>
          </div>
          <div class="footer__group">
            <span class="footer__label">Email</span>
            <a :href="`mailto:${COMPANY_CONTACTS.email}`" class="footer__link">
              {{ COMPANY_CONTACTS.email }}
            </a>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__group">
            <span class="footer__label">Address</span>
            <div class="footer__value">
              {{ COMPANY_CONTACTS.address }}
            </div>
          </div>
          <div class="footer__group">
            <span class="footer__label">Opening hours</span>
            <div class="footer__value">
              <time datetime="09:00">9am</time>
              <span aria-hidden="true">–</span>
              <time datetime="18:00">6pm</time>
            </div>
          </div>
        </div>
        <div class="footer__meta">
          <button
            type="button"
            class="footer__button-up"
            aria-label="Scroll to top"
            @click="scrollToTop"
          >
            <Icon name="ui:arrow" size="24px" aria-hidden="true" />
          </button>
          <p class="footer__copyright">© {{ currentYear }} — Copyright</p>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>
<style lang="scss" scoped>
  .footer {
    padding-block: var(--space-6xl);
    color: var(--color-neutral-0);
    background-color: var(--color-neutral-1100);

    @media (--breakpoint-md) {
      padding-block: var(--space-2xl);
    }

    &__inner {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: var(--space-xl);
      min-height: rem(250);
      padding: var(--space-xl);

      @media (--breakpoint-md) {
        grid-template-columns: 1fr;
        padding-block: var(--space-5xl);
        padding-inline: var(--space-4xl);
      }

      @media (--breakpoint-xs) {
        padding-inline: var(--space-xl);
      }
    }

    &__brand {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (--breakpoint-md) {
        gap: var(--space-5xl);
        justify-content: flex-start;
      }
    }

    &__nav-list {
      display: flex;
      flex-wrap: wrap;
    }

    &__nav-item {
      display: flex;
      align-items: center;
      font-weight: var(--font-weight-semibold);

      &:not(:last-child)::after {
        margin-inline: var(--space-lg);
        color: var(--color-neutral-600);
        content: '/';
      }
    }

    &__column {
      display: flex;
      flex-direction: column;
      gap: var(--space-2xl);
      justify-content: flex-end;
    }

    &__group {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    &__label {
      font-size: var(--font-size-xs);
      color: var(--color-neutral-600);
    }

    &__link {
      font-size: var(--font-size-xs);
    }

    &__nav-link,
    &__link {
      text-decoration-line: underline;
      text-decoration-color: transparent;

      transition:
        color var(--transition-duration-base) var(--transition-timing-function-ease),
        text-decoration-color var(--transition-duration-base) var(--transition-timing-function-ease);

      &:hover,
      &:focus-visible {
        color: var(--color-neutral-400);
        text-decoration-color: currentColor;
      }
    }

    &__value {
      max-width: 100%;
      white-space: nowrap;
      font-size: var(--font-size-xs);

      @media (--breakpoint-2xs) {
        white-space: wrap;
      }
    }

    &__meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      @media (--breakpoint-md) {
        gap: var(--space-5xl);
        justify-content: flex-start;
      }
    }

    &__button-up {
      display: flex;
      align-items: center;
      justify-content: center;
      width: rem(56);
      height: rem(56);
      background-color: var(--color-neutral-0);
      border-radius: var(--radius-circle);
      transform: rotate(-90deg);
      transition: background-color var(--transition-duration-base)
        var(--transition-timing-function-ease);

      &:hover {
        background-color: var(--color-neutral-400);
      }
    }

    &__copyright {
      font-size: var(--font-size-xs);
      color: var(--color-neutral-600);
    }
  }
</style>
