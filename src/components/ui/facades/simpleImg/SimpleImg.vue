<template>
  <v-img
    :aspect-ratio="aspectRatio"
    :src="src"
    :width="width"
    :alt="alt"
    :title="title"
    :cover="cover"
  ></v-img>
</template>
<script setup>
defineProps({
  aspectRatio:{
    type: Number,
    default: 1
  },
  src:{
    type: String,
    required: true
  },
  width:{
    type: Number,
    default: 100
  },
  alt:{
    type: String,
    default: ''
  },
  title:{
    type: String,
    default: ''
  },
  cover:{
    type: Boolean,
    default: false
  },
})
</script>
