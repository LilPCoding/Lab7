import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import './assets/css/main.css'
import './assets/css/templatemo.css'
import './assets/css/slick-theme.css'
import './assets/css/fontawesome.css'
import './assets/css/custom.css'

const pinia = createPinia();

// createApp(App).mount('#app')
createApp(App).use(pinia).mount('#app')

// Import all of Bootstrap's CSS
import"bootstrap/dist/css/bootstrap.css";
// Import all of Bootstrap's JS
import"bootstrap/dist/js/bootstrap.js";
// Import all of Bootstrap's Icons
import"bootstrap-icons/font/bootstrap-icons.css";





