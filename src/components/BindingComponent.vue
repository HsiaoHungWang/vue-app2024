<script setup>
import { ref } from 'vue';

    const message = ref("Text Interpolation")
    const isLogin = ref(false)
    const i = 1
    const sayHi = ()=>{
        return "Hi"
    }

    const week = ref(["日", "一", "二", "三", "四", "五", "六"])
    // console.log(week.value[new Date().getDay()])
    // console.log(new Date().getDay())
    const author = ref({    
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })

    const iSpanUrl = ref('https://www.ispan.com.tw')
    const imgUrl = ref('/images/bg3.png')

    //console.log(author.value.books.length)

    const id = ref(1)

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
     <p>{{i+1}}</p>

     <p>{{ new Date().toLocaleDateString()  }}</p>

     <div>星期{{ week[new Date().getDay()] }}</div>
     <div>出版了書籍：{{ author.books.length > 0 ? "是":"否" }}</div>
     <hr />
    <!--屬性繫節-->
    <a href="https://www.ispan.com.tw">iSpan</a> <br />
    <!-- v-bind:href="Expression" -->
    <a v-bind:href="iSpanUrl">iSpan</a><br />

    <img src="/images/bg3.png" />
    <img :src="imgUrl" :id />
    <img src="@/assets/bird150.jpg" alt="bird" />

    <button>Toggle</button>
    <button :disabled="isDisabled">click</button>

    </div>
</template>

<style lang="css" scoped>

</style>