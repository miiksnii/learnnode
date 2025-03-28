<script setup>

import ListTasks from './Tasks/ListTasks.vue';

const props = defineProps(['token']);


const auth = props.token;

//get tasks from user
function getTasks(){



}

</script>

<template>

<ListTasks :tasks="getTasks"></ListTasks>


</template>