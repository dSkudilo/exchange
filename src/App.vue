<template>
  <component :is="layout"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";
import DefaultLayout from '@/layouts/DefaultLayout'

const route = useRoute()
const layout = computed(() => route.meta.layout || DefaultLayout)
</script>
