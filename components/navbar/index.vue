<script setup lang="ts">
const emit = defineEmits(["onDarkModeChanged"]);
</script>

<template>
    <div class="w-full flex flex-col md:flex-row justify-center items-center px-4">
        <div class="text-Accent dark:text-AccentDark font-barcode text-3xl md:text-5xl">DuilioSeghezzi</div>
        <NavbarMenu/>
        <DarkModeButton @on-dark-mode-toggle="(newValue: boolean)=>emit('onDarkModeChanged', newValue)"/>
    </div>
</template>