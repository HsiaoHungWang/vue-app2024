import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore('todo', () => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    //取得未完成待辦事項的數量
    const newTodos = todos.filter(todo => !todo.completed)
    const remaining = ref(newTodos.length)

    //修改待辦事項
    const countRemaining = count => {
        remaining.value = count
    }

    return { remaining, countRemaining }
})