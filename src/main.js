import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import "./style/main.less";
import './style/github-markdown.less';


import './style/markdown.css';
import './style/animate.min.css';
import './style/highlight.less';
createApp(App).use(router).mount('#app')
