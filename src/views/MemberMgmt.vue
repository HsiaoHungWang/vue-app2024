<script setup>
import { ref } from 'vue'

const BASE_URL = import.meta.env.VITE_APIURL

const API_URL = `${BASE_URL}/members` // "http://localhost:8080/api/members"

const members = ref([])

const loadMembers = async () => {
    const response = await fetch(API_URL)
    if (!response.ok) {
        alert('有問題!!')
    } else {
        members.value = await response.json()
        console.log(members.value)
    }

}
loadMembers()
</script>

<template>
    <div>
        <h2>會員管理</h2>
    </div>
</template>

<style lang="css" scoped></style>