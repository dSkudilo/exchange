<template>
  <v-select
    :label="label"
    :items="items"
    :variant="variant"
    v-model="value"
    :hide-details="hideDetails"
    :itemTitle="itemTitle"
    :itemValue="itemValue"
    :density="density"
  ></v-select>
</template>
<script setup>
import {computed} from "vue";

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => ([])
  },
  variant: {
    type: String,
    default: 'outlined'
  },
  modelValue: {
    type: Number,
    default: null
  },
  hideDetails:{
    type: Boolean,
    default: false
  },
  itemTitle: {
    type: String,
    default: null
  },
  itemValue: {
    type: [String, Number, Boolean],
    default: null
  },
  density: {
    type: String,
    default: 'default'
  }
})

const value = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val)
})
</script>
