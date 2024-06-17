<script setup lang="ts">
const props = defineProps({
    text:{
        type:String,
    },
});
console.log(props.text);
</script>

<template>
    
    <li class="text-Text dark:text-TextDark cursor-pointer select-none w-full h-full px-4 py-5 transition-colors rounded-md hover:bg-Accent dark:hover:bg-AccentDark hover:text-Background dark:hover:text-BackgroundDark duration-200 ease-linear hover:shadow-md hover:shadow-Secondary/70 capitalize" >
        <a :href="`#${text}`" class="w-full h-full p-6">{{ text }}</a>
    </li>
</template>