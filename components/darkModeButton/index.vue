<script setup lang="ts">

const darkMode = ref(false as boolean);
const darkState = ref("Light" as String);

function darkModeState(){
  darkMode.value = !darkMode.value;
  if(darkState.value=="Light")darkState.value="Dark";
  if(darkState.value=="Dark")darkState.value="Light";
  alert(darkState.value);
}

</script>

<template>
    <div class="h-fit w-fit px-7 py-5 mr-3 rounded-md bg-BackgroundDark text-TextDark dark:bg-Background dark:text-Text cursor-pointer" @click="darkModeState">
        {{ darkState }}
    </div>
</template>