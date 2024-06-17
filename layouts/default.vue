<script setup lang="ts">
const isDark = ref(false as boolean);
</script>

<template>
    <div class="h-screen w-screen font-textFont bg-Background dark:bg-BackgroundDark pt-4" @on-dark-mode-toggle="(newValue: boolean) => {isDark=newValue}" :class="{dark: isDark}">
        <!--Stessa roba su ogni componente-->
        <Navbar />
        <!--<div class="w-screen h-screen overflow-scroll flex-1">-->
        <slot />
        <Footer />
    </div>
</template>