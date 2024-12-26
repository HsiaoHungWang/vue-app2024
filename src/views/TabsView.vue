<script setup>
import FirstComponent from '@/components/FirstComponent.vue';
import SecondComponent from '@/components/SecondComponent.vue';
import { ref } from 'vue';

const items = [FirstComponent, SecondComponent]
const activeIndex = ref(0)
</script>

<template>
    <div>
        <h2>Tabs</h2>
        <select v-model="activeIndex">
            <option value="0">First</option>
            <option value="1">Second</option>
        </select>{{ activeIndex }}

        <component :is="items[activeIndex]"></component>
    </div>
</template>

<style lang="css" scoped></style>