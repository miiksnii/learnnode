<script setup>

import { ref } from 'vue';

let message = ref("Hello TA23A");

setTimeout(() => {
  message.value = "Goodbye ta23a";
}
  , 5000);


function textChanged(event) {
  console.log(event);
}

</script>
<template>

  <div class="container">
    <h1>{{ message }}</h1>
    <button class="button is-primary" v-on:click="message='click clack'">Click me!</button>
    <input type="text" class="input" v-model="message">


  </div>

</template>

<style></style>