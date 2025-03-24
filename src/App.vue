<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
let titels = ['Item1', 'Item2', 'Item3', 'Item4'];
let content = ['Content 1', 'Content 2', 'Content 3', 'Content 4'];
let activeTab = ref(0);


function change(key){
  console.log(key);
  activeTab.value = key;
}


</script>
<template>
<Tabs :items="titels" @change="change"></Tabs>
<div class="container">
<h1>{{ content[activeTab] }}</h1>
</div>
</template>
