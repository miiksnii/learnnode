<script setup>
import { ref } from 'vue';

// Create a reactive variable for the joke
let joke = ref("");

// Listener function to handle the API response
function reqListener() {
    let data = JSON.parse(this.responseText);  // Parse the response
    joke.value = data.value;  // Update the 'joke' value with the API response
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://api.chucknorris.io/jokes/random");
req.send();

</script>

<template>
    <!-- Display the joke in the template -->
    {{ joke }}

</template>
