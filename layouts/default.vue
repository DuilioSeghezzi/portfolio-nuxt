<script setup lang="ts">
import { useDarkModeStore } from '~/store/darkMode';

const store = useDarkModeStore();
</script>

<template>
    <div class="h-screen w-screen font-textFont bg-Background dark:bg-BackgroundDark pt-4"
        :class="{ dark: store.darkModeBool }">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>