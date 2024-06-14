<script setup lang="ts">

</script>

<template>
    <div class="font-textFont">
        <BlankSection class="py-64 px-20">
            <Introduction/>
        </BlankSection>

        <BlankSection :title="'About'" class="px-20 py-24 text-center gap-20 justify-around">
            <About/>
        </BlankSection>

        <BlankSection :title="'Experiences'">
            <Experiences/>
        </BlankSection>
    </div>
</template>