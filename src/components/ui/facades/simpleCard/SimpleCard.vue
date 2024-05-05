<template>
  <v-card
    :variant="variant"
  >
    <template #title v-if="!hideTitle">
      <slot name="title"/>
    </template>
    <template #text>
      <slot/>
    </template>
  </v-card>
</template>
<script setup>
defineProps({
  variant: {
    type: String,
    default: 'flat'
  },
  hideTitle: {
    type: Boolean,
    default: false
  }
})
</script>
