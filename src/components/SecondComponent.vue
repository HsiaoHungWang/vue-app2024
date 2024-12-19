<!-- <script>
import { ref } from 'vue';


    export default{
       //options api
        // data(){
        //    return {message:"Options API"} 
        // }

       //compostion api
       setup(){
        const message = ref("Composition API")
        return {message}
       }
    }
</script> -->

<script setup>
  import { ref } from 'vue';
  const message = ref("setup 語法糖")
</script>

<template>
    <div>
      <input type="text" v-model="message" />
      <h2>第二個 Component {{ message }}</h2>
    </div>
</template>

<style lang="css" scoped>
h2{color:blue}
</style>