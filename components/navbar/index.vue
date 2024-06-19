<script setup lang="ts">
const emit = defineEmits(["onDarkModeToggle"]);
</script>

<template>
    <div class="w-full flex flex-row justify-around items-center gap-2 md:gap-48">
        <div class="text-Accent dark:text-AccentDark font-barcode text-3xl md:text-6xl ml-1">DuilioSeghezzi</div>
        <NavbarMenu />

        <DarkModeButton @on-dark-mode-toggle="(newValue: boolean) => emit('onDarkModeToggle', newValue)"
            class="my-5 mx-5 md:ml-28" />
        <MobileMenu/>
    </div>

</template>