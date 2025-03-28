<script setup>
import { ref } from 'vue';
import Login from './components/Login.vue';
import Tasks from './components/Tasks.vue';
import Tabs from './components/Tabs.vue';

// State to control the visibility of the curriculum box
const isCurriculumVisible = ref(false);



let active = ref(-1);
let user_data = {
    auth_token: ""
}

// Toggle function to change visibility
const toggleCurriculumBox = () => {
    isCurriculumVisible.value = !isCurriculumVisible.value;
};

let tabs = [
    { name: "Login", event: toggleCurriculumBox },

];

function updateActive(val) {
    active.value = val;
}

function startEvent(key) {
    tabs[key].event();
}

let token = ref(0);
</script>

<template>

    <Tabs :tabs="tabs" :active="active" @update:active="updateActive" @update:eventKey="startEvent"/>

    <div class="container mt-5">
        <!-- login area -->
        <div class="box" :class="{ 'is-hidden': !isCurriculumVisible }">
            <!-- Item 1 -->
            <div class="collapsible-item is-flex is-justify-content-center is-align-items-center">
                <Login @auth="val => token = val"/>
            </div>
        </div>

        <!-- Tasks box -->
        <div class="box tasks">
            <Tasks :token="token"></Tasks>
        </div>
    </div>
</template>

<style scoped>
/* Transition effect for box appearance */
.box {
    transition: opacity 0.5s ease, transform 0.5s ease;
    box-shadow: none !important;
}

.box.is-hidden {
    opacity: 0;
    transform: scale(0.95);
    /* Optionally scale it down when hidden */
}

/* Optional: Give the box a little shadow when it's visible */
.box:not(.is-hidden) {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>

<style>
/* Transition effect for button */
.button {
    transition: all 0.3s ease;
    /* Smooth transition for all properties */
}

.button:hover {
    transform: scale(1.05);
    /* Make the button slightly bigger on hover */
    background-color: #007bff;
    /* Darker blue background on hover */
    color: white;
}
</style>