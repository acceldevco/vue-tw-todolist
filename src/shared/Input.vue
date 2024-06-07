<script setup>
const value2 = defineModel('value')
defineProps({
    value: String,
    class: String,
})
</script>
<template>
    <div>
        <input v-model="value2" type="text" :class="class" />
    </div>
</template>