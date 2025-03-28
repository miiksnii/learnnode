// Import Vue and the main App component
import { createApp } from 'vue';
import App from './App.vue';

// Import the global styles (optional)
import './style.scss';

// Create and mount the Vue app
const app = createApp(App);
app.mount('#app'); // Mount to the element with id 'app'
