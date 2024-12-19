<template>
    <h2 id="myH">第一個 Component</h2>
</template>
<style scoped>
  h2{
    background-color: silver;
  }
</style>
<script setup>
import { onMounted } from 'vue';

//表示 DOM Tree 已經產生，可以用 DOM API 及 jQuery 程式去控制它了
onMounted(()=>{
    //DOM API、jQuery
    const theH = document.querySelector('#myH')
    console.log(theH)  //theH.textContent
    console.log(theH.textContent)
})


</script>