<script setup>
defineProps(
    //['name','class',function()=>{}]
    {
        name: String,
        class: String,
        callback: Function,
    }
)
</script>
<template>
    <div>
        <button v-on:click="(e)=>callback(e)" :class="class">{{ name }}</button>
    </div>
</template>