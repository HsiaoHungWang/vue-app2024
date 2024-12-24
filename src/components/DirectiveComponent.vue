<script setup>
import { ref } from 'vue';

    const message = ref("<h3>directive v-text</h3>")
    const isLoading = ref(false)
    const isLogin = ref(true)
    // setTimeout(()=>{
    //    isLoading.value = false
    // },3000)
</script>

<template>
    <div>
<h2>指令介紹</h2>
<div>{{ message}}</div>
<div v-text="message"></div>
<div v-html="message"></div>
<img src="/images/loading.gif" alt="loading" v-show="isLoading" />
<img src="/images/loading.gif" alt="loading" v-if="isLoading" />
<div v-if="isLogin">
    <p>isLogin 為 true</p>
    <button @click="isLogin = !isLogin">登出</button>
</div>
<div v-else>
    <p>isLogin 為 false</p>
    <button @click="isLogin = !isLogin">登入</button>
</div>
    </div>
</template>

<style lang="css" scoped>

</style>