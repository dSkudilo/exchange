<template>
  <v-row :no-gutters="noGutters" >
    <slot/>
  </v-row>
</template>
<script setup>
defineProps({
  noGutters: {
    type: Boolean,
    default: false
  }
})
</script>
