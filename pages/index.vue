<script setup lang="ts">
const isDark = ref(false as boolean);
</script>

<template>
    <div class="font-textFont px-5 md:px-20 bg-Background dark:bg-BackgroundDark">
        <Introduction id="home" class="mt-[25vh]"/>
        
        <About id="about" class="my-64"/>

        <Experiences id="experience" />
    </div>
</template>