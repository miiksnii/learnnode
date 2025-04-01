import './style.scss';  // Importing styles
import { createApp } from 'vue';  // Importing createApp from Vue
import { createWebHashHistory, createWebHistory, createMemoryHistory, createRouter } from 'vue-router';

import App from './App.vue';  // Importing your root component
import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';
import Chuck from './pages/Chuck.vue';
import RickAndMorty from './pages/RickAndMorty.vue';

const routes = [
  { path: '/', component: ToDo, name: 'Todo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/chuck', component: Chuck, name: 'Chuck' },
  { path: '/rickandmorty', component: RickAndMorty, name: 'Rick And Morty' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


const app = createApp(App);  // Creating the Vue app with the App component
app.use(router);  
app.mount('#app');  // Mounting Vue to the element with the id 'app'
