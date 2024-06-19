<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    routeName: {
        type: String,
        required: true,
    }
})

function goToRoute() {
    const router = useRouter();
    router.push({ name: props.routeName });
}
</script>

<template>
    <h3 class="font-textFont tracking-wider text-Text dark:text-TextDark text-center cursor-pointer select-none" @click="goToRoute">
        {{ text }}
    </h3>
</template>