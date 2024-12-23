<script setup>
import { ref } from 'vue';

    const formatTime = (today) => {       
        const hours = String(today.getHours()).padStart(2, '0');
        const minutes = String(today.getMinutes()).padStart(2, '0');
        const seconds = String(today.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
   }
  
   const clock  = ref(formatTime(new Date()))


</script>

<template>
    <div>
<h2>Watch vs WatchEffect</h2>
<h3>現在時間：{{ clock }}</h3>
    </div>
</template>

<style lang="css" scoped>

</style>