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
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>編號 </th>
                    <th>姓名 </th>
                    <th>電子郵件 </th>
                    <th>年紀</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="member in members" :key="member.memberId">
                    <td>{{ member.memberId }}</td>
                    <td>{{ member.name }}</td>
                    <td>{{ member.email }}</td>
                    <td>{{ member.age }}</td>
                    <td>
                        <button title="編輯" class="btn btn-secondary mx-3">
                            <i class="bi bi-pencil-square"></i></button>
                        <button title="刪除" class="btn btn-danger">
                            <i class="bi bi-trash-fill"></i></button>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="css" scoped></style>