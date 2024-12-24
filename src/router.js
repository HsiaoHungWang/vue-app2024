import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";

//路由設定
//URL => Component
const routes = [
    //http://localhost:5173/ => HomeView.vue
    { path: "/", component: HomeView, name: "home" },
    //http://localhost:5173/about => AboutView.vue
    { path: "/about", component: AboutView, name: "about" },
    //http://localhost:5173/contact => ContactView.vue
    { path: "/contact", component: ContactView, name: "contact" },
    // { path: "/register", component: RegisterView }
]

const router = createRouter({
    history: createWebHistory(),//指定用哪一種方式產生歷史紀錄
    routes //指定路由設定，參數名稱跟路由設定的變數名稱一樣
})

export default router