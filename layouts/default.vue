<script setup lang="ts">

</script>

<template>
    <div class="w-screen h-screen flex flex-col font-textFont bg-Background dark:bg-BackgroundDark">
        <Navbar/>
        <div class="w-full h-full overflow-auto flex-1">
            <slot />
            <Footer/>
        </div>
    </div>
</template>