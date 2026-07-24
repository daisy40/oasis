<script setup lang="ts">
  interface Props {
    size?: string
  }

  const { size = '30px' } = defineProps<Props>()
</script>

<template>
  <NuxtLink to="/" aria-label="Go to homepage">
    <Icon name="brand:oasis" :size mode="svg" />
  </NuxtLink>
</template>
