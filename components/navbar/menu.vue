<script setup lang="ts">
const navbarLinks = ["home", "about", "experience"];
</script>

<template>
    <nav>
        <ul class="flex flex-row items-center gap-5 h-full">
            <NavbarLink v-for="link in navbarLinks" :text="link" />
        </ul>
    </nav>
</template>