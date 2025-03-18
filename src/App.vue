<script setup>

import {ref} from 'vue';
import Modal from './components'

let modalActive = ref(false);

document.body.addEventListener('keydown', event => {
  console.log(event);
  if(event.key === "Escape"){
    emit('close');
  }
})


</script>

<template>

<div class="container">
  <section class="section">
    <button class="button is-primary" @click="modalActive=true">Modal Active</button>
    <button class="button is-warning is-outlined ml-2" @click="modalActive=true">Modal 2 Active</button>
  </section>

</div>
<Modal :active="modalActive" @close="modalActive=false"></Modal>
</template>

<style>

</style>