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
      class="rounded-md bg-BackgroundDark text-TextDark dark:bg-Background dark:text-Text cursor-pointer px-10 py-5 text-center"
      @click="darkModeToggle">
      {{ darkState }}
    </div>
</template>