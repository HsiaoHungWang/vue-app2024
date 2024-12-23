<script setup>
import { ref } from 'vue';

    const message = ref("Text Interpolation")

    const sayHi = ()=>{
        return "Hi"
    }
</script>

<template>
    <div>
<h2>Template Binding</h2>
    <!--{{ Text Interpolation 插值 表達式 Expression  }}  -->
     <p>{{ 2 }}</p>
     <p>{{ message }}</p>
     <p>{{ 1 + 2 }}</p>
     <p>{{ sayHi() }}</p>
    </div>
</template>

<style lang="css" scoped>

</style>