<script setup>
import { ref } from 'vue';
import axios from 'axios';

let joke = ref(" ");

let response = await axios.get("https://api.chucknorris.io/jokes/random").then(res => {
    joke.value = res.data.value;
}).catch(err=>{
    console.log(err);
})



</script>
<template>    
    {{ joke }}
</template>
