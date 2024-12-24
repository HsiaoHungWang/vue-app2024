<script setup>
import BindingComponent from './components/BindingComponent.vue';
import BMIComponent from './components/BMIComponent.vue';
import ComputedDemo from './components/ComputedDemo.vue';
import FirstComponent from './components/FirstComponent.vue';
import MyComponent from './components/MyComponent.vue';

import SecondComponent from './components/SecondComponent.vue';
import WatchDemo from './components/WatchDemo.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';



</script>

<template>    
 <h2>Hello Vue!!!!!</h2>
 <!-- <RouterLink to="/">首頁</RouterLink> | 
 <RouterLink to="/about">關於我們</RouterLink> | 
 <RouterLink to="/contact">聯絡我們</RouterLink> |  -->
 <RouterLink :to="{name:'home'}">首頁</RouterLink> | 
 <RouterLink :to="{name:'about'}">關於我們</RouterLink> | 
 <RouterLink :to="{name:'contact'}">聯絡我們</RouterLink> | 
 <hr />
 <!--是一個容器，根據路由，載入不同的Component-->
 <RouterView></RouterView>





<!-- <HomeView></HomeView>
 <AboutView></AboutView>
 <ContactView></ContactView>
 
  <BMIComponent></BMIComponent>
<WatchDemo></WatchDemo>
 <ComputedDemo></ComputedDemo>
<BindingComponent></BindingComponent>
 <MyComponent></MyComponent>
 <FirstComponent></FirstComponent>
<SecondComponent></SecondComponent>  -->

</template>

<style scoped>
h2{color:green}
</style>
