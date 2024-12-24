<script setup>
import { ref } from 'vue';

    const message = ref("<h3>directive v-text</h3>")
    const isLoading = ref(true)
    setTimeout(()=>{
       isLoading.value = false
    },3000)
</script>

<template>
    <div>
<h2>指令介紹</h2>
<div>{{ message}}</div>
<div v-text="message"></div>
<div v-html="message"></div>
<img src="/images/loading.gif" alt="loading" v-show="isLoading" />
    </div>
</template>

<style lang="css" scoped>

</style>