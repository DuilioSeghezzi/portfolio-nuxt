<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  }
});
</script>

<template>
    <div class="w-screen flex flex-col justify-center">
    <div class="w-full flex-col">
      <div
        v-if="title"
        class="font-lato text-5xl font-title2 tracking-wider mb-3 w-full text-center text-Accent/80">
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>