<template>
  <v-table :fixed-header="fixedHeader">
    <slot/>
    <template #bottom>
      <slot name="bottom"/>
    </template>
  </v-table>
</template>
<script setup>
defineProps({
  fixedHeader:{
    type: Boolean,
    default: false
  }
})
</script>
