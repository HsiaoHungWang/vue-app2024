<script setup>
import { ref } from 'vue';

const newTodo = ref('')

const enterHandler = () => {
    alert(newTodo.value)
    clearHandler()
}

//清除文字輸入方塊的內容
const clearHandler = () => {
    newTodo.value = ''
}
</script>

<template>
    <div>
        <input v-model="newTodo" @keyup.enter="enterHandler" @keyup.delete="clearHandler" type="text"
            class="form-control mb-3" autofocus placeholder="想做甚麼?" />
    </div>
</template>

<style lang="css" scoped></style>