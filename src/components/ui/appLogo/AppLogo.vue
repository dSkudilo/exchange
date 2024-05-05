<template>
  <SimpleImg
    class="bg-white"
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    :width="width"
    :alt="APP_NAME"
    :title="APP_NAME"
    cover
  />
</template>
<script setup>
import {APP_NAME} from "@/constants/APP";
import {SimpleImg} from "@/components/ui/facades/simpleImg";

defineProps({
  width:{
    type: Number,
    default: 50
  }
})
</script>
