<script setup>

import {ref} from 'vue';
import Modal from './components/Modal.vue';



let modalActive = ref(false);
let modalActive2 = ref(false);

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
    <button class="button is-warning is-outlined ml-2" @click="modalActive2=true">Modal 2 Active</button>
  </section>

</div>
<Modal :active="modalActive" @close="modalActive=false"></Modal>
<Modal :active="modalActive2" @close="modalActive2=false"></Modal>
</template>

<style>

</style>