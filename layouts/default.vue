<script setup lang="ts">
const isDark = ref(false as boolean);
</script>

<template>
    <div class="h-screen w-screen font-textFont bg-Background dark:bg-BackgroundDark pt-4" :class="{dark: isDark}">
        <Navbar @on-dark-mode-changed="(newValue: boolean) => {isDark=newValue}"/>
        <slot />
        <Footer />
    </div>
</template>