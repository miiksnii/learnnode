<script setup>
import { ref } from 'vue';
let modalActive = ref(false);


</script>
<template>
  <div class="container mt-2">
    <section class="section">
      <button class="button is-primaty" @click="modalActive=true">Activate modal</button>
    </section>
  </div>

  <div class="modal">
    <div class="modal-background" :class="{ 'is-active': modalActive }"></div>
    <div class="modal-content">
      <p class="image is-4by3">
        <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="">
      </p>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>

</template>