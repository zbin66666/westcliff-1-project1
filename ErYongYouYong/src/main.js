import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'jquery';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css';
import router from "./routes";

createApp(App).use(router).mount('#app')
