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
 <HomeView></HomeView>
 <AboutView></AboutView>
 <ContactView></ContactView>
  <!--<BMIComponent></BMIComponent>
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
