<script setup lang="ts">
const props = defineProps({
    text:{
        type:String,
    },
    routeName: {
        type: String,
  },
});

function gotoRoute() {
  const router = useRouter();
  router.push({ name: props.routeName });
}

</script>

<template>
    <li class="text-Text dark:text-TextDark cursor-pointer select-none w-full h-full px-5 py-5 transition-colors rounded-md hover:bg-Accent dark:hover:bg-AccentDark hover:text-Background dark:hover:text-BackgroundDark duration-200 ease-linear hover:shadow-md hover:shadow-Secondary/70" @click="gotoRoute">
        {{ text }}
    </li>
</template>