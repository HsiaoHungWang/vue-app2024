<script setup>
import BMIComponent from '@/components/BMIComponent.vue';
import FirstComponent from '@/components/FirstComponent.vue';
import SecondComponent from '@/components/SecondComponent.vue';
import { ref } from 'vue';


const tabs = ref([
    { name: 'First', component: FirstComponent },
    { name: 'Second', component: SecondComponent },
    { name: 'BMI', component: BMIComponent }
])
const currentTab = ref(FirstComponent)

const items = [FirstComponent, SecondComponent]
const activeIndex = ref(0)
</script>

<template>
    <div>
        <h2>Tabs</h2>
        <ul class="nav nav-tabs">
            <li class="nav-item" v-for="tab in tabs" :key="tab.name">
                <a class="nav-link active" href="#" @mouseenter="currentTab = tab.component">{{ tab.name }}</a>
            </li>
        </ul>
        <component :is="currentTab"></component>

        <hr />
        <select v-model="activeIndex">
            <option value="0">First</option>
            <option value="1">Second</option>
        </select>{{ activeIndex }}

        <component :is="items[activeIndex]"></component>
    </div>
</template>

<style lang="css" scoped></style>