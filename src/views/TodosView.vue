<script setup>
import { ref } from 'vue';

const todos = ref(
 [
    { "id": "m21uwqfprb0ncx4", "title": "買菜", "completed": false },
    { "id": "m21w6x73hw2tvrc", "title": "看電視", "completed": true }, 
    { "id": "m21w6x73hw2abcd", "title": "睡覺", "completed": true },
 ]
)
//取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

</script>

<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <h2>代辦事項</h2>
        </div>
        <div class="col-3">          
        </div>

    </div>
</template>

<style lang="css" scoped>

</style>