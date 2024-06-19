<script setup lang="ts">
const props = defineProps({
    text:{
        type:String,
    },
});
console.log(props.text);
</script>

<template>
    
    <li class="text-Text dark:text-TextDark cursor-pointer select-none w-fit h-full px-4 py-5 transition-colors rounded-md hover:bg-Accent dark:hover:bg-AccentDark hover:text-Background dark:hover:text-BackgroundDark duration-200 ease-linear hover:shadow-lg hover:dark:shadow-Secondary hover:shadow-SecondaryDark/50 capitalize" >
        <a :href="`#${text}`" class="w-fit h-full p-6">{{ text }}</a>
    </li>
</template>