<template>
  <component :is="layout"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {computed} from "vue";
import DefaultLayout from '@/layouts/DefaultLayout'

const route = useRoute()
const layout = computed(() => route.meta.layout || DefaultLayout)
// const socket = new WebSocket('wss://stream.binance.com:9443/ws/bnbbtc@depth.')

// socket.onopen(() => {
//   console.log("WebSocket connection opened:", event);
// });

// Connection opened
// socket.addEventListener("open", (event) => {
//   socket.send("Hello Server!", event);
// });
//
// // Listen for messages
// socket.addEventListener("message", (event) => {
//   console.log("Message from server ", event.data);
// });
// console.log(socket)
</script>
