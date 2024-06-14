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
    <li class="text-Text cursor-pointer select-none" @click="gotoRoute">
        {{ text }}
    </li>
</template>