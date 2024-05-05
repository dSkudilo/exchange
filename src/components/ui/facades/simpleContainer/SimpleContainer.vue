<template>
  <v-container :class="{'h-100': isFullHeight}">
    <slot/>
  </v-container>
</template>
<script setup>
defineProps({
  isFullHeight: {
    type: Boolean,
    default: true,
  },
})
</script>
