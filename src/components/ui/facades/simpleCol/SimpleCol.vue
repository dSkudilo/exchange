<template>
  <v-col
    :cols="cols"
    :lg="lg"
    :md="md"
    :sm="sm"
  >
    <slot/>
  </v-col>
</template>
<script setup>
defineProps({
  cols: {
    type: [Number, String],
    default: 'auto'
  },
  lg: {
    type: [Number, String],
    default: null
  },
  md: {
    type: [Number, String],
    default: null
  },
  sm: {
    type: [Number, String],
    default: null
  }
})
</script>
