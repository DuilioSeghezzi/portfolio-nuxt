<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  }
});
</script>

<template>
  <div>
    <div v-if="title" class="font-lato text-5xl font-title2 tracking-wider mb-3 text-center text-Accent/80">
      {{ title }}
    </div>
    <slot />
  </div>
</template>