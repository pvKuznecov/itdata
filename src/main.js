import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App.vue';

const app = createApp(App);

// router
import router from './router';
app.use(router);

// PagetitleComponent
import PagetitleComponent from '@/components/PagetitleComponent/PagetitleComponent.vue';
app.component('PagetitleComponent', PagetitleComponent);

app.mount('#app');