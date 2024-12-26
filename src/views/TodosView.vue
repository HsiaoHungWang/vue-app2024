<script setup>
import TodoAdd from '@/components/TodoAdd.vue';
import { computed, ref } from 'vue';


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
/*
const enterHandler = () => {
    todos.value.push({ "id": uniqueId(), "title": newTodo.value, "completed": false })
    clearHandler()
}
*/

//刪除待辦事項
const removeTodo = todo => {
    //先找到Array.indexOf()要刪除的這筆todo的index
    const idx = todos.value.indexOf(todo)
    //用Array.splice(index, delcount)
    todos.value.splice(idx, 1)
}

//取得未完成待辦事項的數量
const remaining = computed(() => {
    const newTodos = todos.value.filter(todo => !todo.completed)
    return newTodos.length
})

//刪除所有已完成的待辦事項
const removeCompleted = () => {
    for (let i = todos.value.length - 1; i >= 0; i--) {
        //completed為true就是要刪除這筆資料
        if (todos.value[i].completed) {
            todos.value.splice(i, 1)
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <h2>代辦事項</h2>
            <TodoAdd></TodoAdd>
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
            <div class="mt-3 d-flex justify-content-between">
                <strong class=" me-3">尚有 {{ remaining }} 個工作未完成</strong>
                <button class="btn btn-warning me-3" @click="removeCompleted">清除完成工作</button>
            </div>

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