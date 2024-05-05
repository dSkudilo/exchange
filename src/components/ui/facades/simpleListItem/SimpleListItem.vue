<template>
  <v-list-item
    :link="link"
    :title="title"
    :subtitle="subtitle">
    <slot/>
  </v-list-item>
</template>
<script setup>
defineProps({
  link: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
