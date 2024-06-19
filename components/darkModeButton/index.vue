<script setup lang="ts">
import { useDarkModeStore } from '~/store/darkMode';

const store = useDarkModeStore();

function darkModeToggle() {
  store.darkToggle();
}



</script>

<template>
    <div
      class="rounded-md bg-BackgroundDark/90 text-TextDark dark:bg-Background dark:text-Text cursor-pointer text-center px-4 py-4 md:px-8 md:py-4 text-sm md:text-lg"
      @click="darkModeToggle">
      {{ store.darkModeBool ? "Dark" : "Light" }}
    </div>
</template>