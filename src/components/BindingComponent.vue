<script setup>
import { ref } from 'vue';

    const message = ref("Text Interpolation")
    const isLogin = ref(false)
    const i = 1
    const sayHi = ()=>{
        return "Hi"
    }

    const week = ref(["日", "一", "二", "三", "四", "五", "六"])
    console.log(new Date().getDay())
</script>

<template>
    <div>
<h2>Template Binding</h2>
    <!--{{ Text Interpolation 插值 表達式 Expression  }}  -->
     <p>{{ 2 }}</p>
     <p>{{ `Hello ${message}`  }}</p>
     <p>{{ 1 + 2 }}</p>
     <p>{{ sayHi() }}</p>
     <p>{{ false ? "YES" : "NO" }}</p>
     <p>{{ isLogin ? "登入帳號" : "請先登入" }}</p>

     <!--錯誤寫法，須改用三元運算子-->
     <!-- {{ if (true) { return 'Hello' } }} -->
       <!--錯誤寫法，不能做變數需告 -->
     <!--{{ let name = "Jack"  }}-->
{{i+1}}

     <p>{{ new Date().toLocaleDateString()  }}</p>

     <div>星期{{      }}</div>


    </div>
</template>

<style lang="css" scoped>

</style>