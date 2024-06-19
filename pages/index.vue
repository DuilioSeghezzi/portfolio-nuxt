<script setup lang="ts">
import { useDarkModeStore } from '~/store/darkMode';

const isDark = ref(false as boolean);

useDarkModeStore();

</script>

<template>
    <div class="font-textFont px-7 md:px-20 bg-Background dark:bg-BackgroundDark">
        <Introduction id="home" class="mt-[25vh]"/>
        
        <About id="about" class="my-64"/>

        <Experiences id="experience" />
    </div>
</template>