import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //匯入路由設定 //vue-router

//pinia


const vueApp = createApp(App) //建立Vue的應用程式
vueApp.use(router) //使用路由
vueApp.mount('#app')//將Vue的應用程式載入到index.html中id為#app的標籤中

// createApp(App).use(router).mount('#app')

//ECMA => Script Laguage
//import export


