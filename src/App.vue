<script setup>

import { ref } from 'vue';

let message = ref("Hello TA23A");

let items = ref(['Piim', 'Viin','Õlu','Krõpsud'])

function addItem(){
  if(message.value.trim() !== ''){
    items.value.push(message.value.trim());
  }
  message.value = '';
}

</script>
<template>
  <div class="container mt-2">
    <div class="field has-addons">
      
    <div class="control">
      <input type="text" class="input" v-model="message" @keypress.enter="addItem">
    </div>
    <div class="control">
      <button class="button is-info" @click="addItem">
        Add Item
      </button>
    </div>
    </div>

    <h3>All Items</h3>
    <u>
      <li v-for="item in items">{{ item }}</li>
    </u>

  </div>

</template>

<style></style>