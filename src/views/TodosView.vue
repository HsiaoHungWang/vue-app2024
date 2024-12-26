<script setup>
import { ref } from 'vue';

const newTodo = ref('')
const todos = ref(
    [
        { "id": "m21uwqfprb0ncx4", "title": "買菜", "completed": false },
        { "id": "m21w6x73hw2tvrc", "title": "看電視", "completed": true },
        { "id": "m21w6x73hw2abcd", "title": "睡覺", "completed": false },
    ]
)
//取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

//新增待辦事項
const enterHandler = () => {
    todos.value.push({ "id": uniqueId(), "title": newTodo.value, "completed": false })
    clearHandler()
}
//清除文字輸入方塊的內容
const clearHandler = () => {
    newTodo.value = ''
}

//刪除待辦事項
const removeTodo = todo => {
    //先找到Array.indexOf()要刪除的這筆todo的index
    const idx = todos.value.indexOf(todo)
    //用Array.splice(index, delcount)
    todos.value.splice(idx, 1)
}
</script>

<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <h2>代辦事項</h2>
            <input v-model="newTodo" @keyup.enter="enterHandler" @keyup.delete="clearHandler" type="text"
                class="form-control mb-3" autofocus placeholder="想做甚麼?" />
            <ol class="list-group list-group-numbered">
                <li v-for="todo in todos" :key="todo.id"
                    class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <input type="checkbox" v-model="todo.completed" class="form-check-inpu me-3">
                        <label class="form-label" :class="{ completed: todo.completed }">{{ todo.title }}</label>
                    </div>
                    <button @click="removeTodo(todo)" class="badge text-bg-danger rounded-pill">X</button>
                </li>
            </ol>
        </div>
        <div class="col-3">
        </div>

    </div>
</template>

<style lang="css" scoped>
.completed {
    color: #949494;
    text-decoration: line-through;
}
</style>