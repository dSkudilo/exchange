<template>
  <v-navigation-drawer v-model="value" >
    <slot/>
  </v-navigation-drawer>
</template>
<script setup>
import {computed} from "vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true
  }
})
const value = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val)
})
</script>
