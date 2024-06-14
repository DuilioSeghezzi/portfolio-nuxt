<script setup lang="ts">

</script>

<template>
    <div class="w-screen h-screen flex flex-col font-textFont">
        <Navbar/>
        <div class="w-full h-full overflow-auto flex-1">
            <slot />
            <hr class="shadow-md shadow-Text">
            <Footer/>
        </div>
    </div>
</template>