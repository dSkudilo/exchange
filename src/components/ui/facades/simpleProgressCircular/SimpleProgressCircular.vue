<template>
  <v-progress-circular
    :color="color"
    :indeterminate="indeterminate"
    :size="size"/>
</template>
<script setup>
defineProps({
  color: {
    type:String,
    default: 'primary'
  },
  indeterminate: {
    type:Boolean,
    default: true
  },
  size: {
    type:Number,
    default: 20
  },
})
</script>
