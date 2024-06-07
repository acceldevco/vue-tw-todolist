<script setup>
import { ref } from 'vue'
import Button from '../shared/Button.vue';

import Input from '../shared/Input.vue'
import Cart from '../components/Cart.vue'
const myRef = ref({ data: {} })
defineProps({

})

</script>
<template>
    <div>
        <div class="flex flex-col justify-between items-center  overflow-hidden gap-4 px-20 py-[217px] bg-[#e3e3e3]">
            <div class="flex flex-col justify-center items-center gap-5 flex-grow-0 flex-shrink-0 ">
                <div class="flex justify-center gap-4 items-center  relative ">
                    <Input v-model:value="myRef.name"
                        class="flex-grow-0 flex-shrink-0 w-[30vw] p-1 relative overflow-hidden bg-[#f0f0f0]" />
                    <p class="flex-grow-0 flex-shrink-0  text-left text-black">نام</p>
                </div>
                <div class="flex justify-start items-center  relative ">
                    <Input v-model:value="myRef.email"
                        class="flex-grow-0 flex-shrink-0 w-[30vw] p-1 relative overflow-hidden bg-[#f0f0f0]" />

                    <p class="flex-grow-0 flex-shrink-0  text-left text-black">ایمیل</p>
                </div>
                <Button name="ثبت" :callback="(e) => (console.log(e)
                    , myRef.data[myRef.name] = { 'email': myRef.email, 'name': myRef.name })"
                    class="flex justify-center p-2 items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-14 rounded-[26px] bg-[#83f480]/[0.63]"></Button>
            </div>

            <div v-for="(d, i) in Object.values(myRef.data)">
                <Cart :name="d?.name" :email="d?.email" :fun="() => delete myRef.data[d.name]" />

            </div>

        </div>
    </div>
</template>