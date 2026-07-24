<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    max-width: rem(1280);
    padding-inline: var(--space-lg);
    margin-inline: auto;
  }
</style>
