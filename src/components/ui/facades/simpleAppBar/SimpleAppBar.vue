<template>
  <v-app-bar :elevation="elevation">
    <template v-slot:prepend>
      <slot name="prepend"></slot>
    </template>
    <slot name="logo"/>
    <v-app-bar-title>
      <slot name="title"/>
    </v-app-bar-title>
  </v-app-bar>
</template>
<script setup>
defineProps({
  elevation: {
    type: Number,
    default: 10
  }
})
</script>
