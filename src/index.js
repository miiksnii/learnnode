import './style.scss';  // Importing styles
import { createApp } from 'vue';  // Importing createApp from Vue
import App from './App.vue';  // Importing your root component

const app = createApp(App);  // Creating the Vue app with the App component
app.mount('#app');  // Mounting Vue to the element with the id 'app'
