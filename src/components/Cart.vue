<script setup>
defineProps({
    name: String,
    email: String,
    fun: Function
})
</script>
<template>
    <div>
        <div
            class="flex justify-between items-center grow p-2 w-[80vw] relative overflow-hidden px-[52px] rounded-[30px] bg-[#eee]">
            <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                v-on:click="fun" class="flex-grow-0 flex-shrink-0 w-[20px] h-[20px]" preserveAspectRatio="none">
                <path d="M12.5 14.9492H15.5V38.9492H12.5V14.9492Z" fill="#FF000F"></path>
                <path d="M18.5 14.9492H21.5V38.9492H18.5V14.9492Z" fill="#FF000F"></path>
                <path d="M24.5 14.9492H27.5V38.9492H24.5V14.9492Z" fill="#FF000F"></path>
                <path d="M0.5 5.94922H39.5V8.94922H0.5V5.94922Z" fill="#FF000F"></path>
                <path
                    d="M27.4001 7.45078H24.6001V4.45078C24.6001 3.55078 23.9001 2.85078 23.0001 2.85078H17.0001C16.1001 2.85078 15.4001 3.55078 15.4001 4.45078V7.45078H12.6001V4.45078C12.6001 2.05078 14.6001 0.0507812 17.0001 0.0507812H23.0001C25.4001 0.0507812 27.4001 2.05078 27.4001 4.45078V7.45078Z"
                    fill="#FF000F"></path>
                <path
                    d="M29 47.9516H11C8.6 47.9516 6.5 45.9516 6.3 43.5516L3.5 7.55156L6.5 7.35156L9.3 43.3516C9.4 44.2516 10.2 44.9516 11 44.9516H29C29.9 44.9516 30.7 44.1516 30.7 43.3516L33.5 7.35156L36.5 7.55156L33.7 43.5516C33.5 46.0516 31.4 47.9516 29 47.9516Z"
                    fill="#FF000F"></path>
            </svg>
            <p class="flex-grow-0 flex-shrink-0  text-left text-black">{{ email }}</p>
            <p class="flex-grow-0 flex-shrink-0  text-left text-black">{{ name }}</p>
        </div>
    </div>
</template>