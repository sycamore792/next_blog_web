import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router';
import "./style/main.less";
import './style/github-markdown.less';


import './style/markdown.css';
import './style/animate.min.css';
import './style/highlight.less';

const app = createApp(App);
const pinia = createPinia()



app.use(router).use(pinia).mount('#app')

