<script setup>
import { useRoute } from 'vue-router';

    defineProps({
        id:String
    })

    //在 script 取參數值
    const route = useRoute()
    console.log("id：", route.params.id)
</script>

<template>
    <div>
       <!--方法一. 在 template 讀取 URL 的參數 -->
       <h2>會員中心 {{ $route.params.id }}</h2>
       <p>會員編號 {{id}}</p>

       <!--
       方法二 
       1.在路由的設定檔加上 props:true
       2.用defineProps宣告參數名稱
       3.直接在{{ }}用參數名稱
       -->

    </div>
</template>

<style lang="css" scoped>

</style>