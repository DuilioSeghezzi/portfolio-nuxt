<script setup lang="ts">

const darkMode = ref(false as boolean);
const darkState = ref("Light" as String);

const emit = defineEmits(["onDarkModeToggle"]);

function darkModeToggle() {
  darkMode.value = !darkMode.value;
  darkState.value === "Light" ? darkState.value = "Dark" : darkState.value = "Light";
  emit("onDarkModeToggle", darkMode.value);
}



</script>

<template>
    <div
      class="rounded-md bg-BackgroundDark/90 text-TextDark dark:bg-Background dark:text-Text cursor-pointer text-center px-4 py-4 md:px-8 md:py-4 text-sm md:text-lg"
      @click="darkModeToggle">
      {{ darkState }}
    </div>
</template>