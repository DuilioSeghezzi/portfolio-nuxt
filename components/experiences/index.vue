<script setup lang="ts">
const esperienza = ref("Paragrafo di spiegazione sul perché è bello C++");
function displaycpp() {
    esperienza.value = "Paragrafo di spiegazione sul perché è bello C++";
}
function displayjava() {
    esperienza.value = "Paragrafo di spiegazione sul perché è bello Java";
}
function displaynuxt() {
    esperienza.value = "Paragrafo di spiegazione sul perché è bello NUXT";
}

</script>

<template>
    <div class="flex flex-col gap-16">
        <h3 class="font-lato text-5xl font-title2 tracking-wider text-center text-Accent/80">Experiences</h3>
        <div class="flex flex-row gap-10 justify-center">
            <BlankCard @click="displaycpp"
                class="py-20 px-10 aspect-auto shadow-none transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-Accent/50 dark:hover:shadow-AccentDark/50 cursor-pointer">
                <img src="@/assets/images/logocpp.svg" class="w-36 h-36">
            </BlankCard>
            <BlankCard @click="displayjava"
                class="py-20 px-10 aspect-auto shadow-none transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-Accent/50 cursor-pointer">
                <img src="@/assets/images/logojava.svg" class="w-36 h-36">
            </BlankCard>
            <BlankCard @click="displaynuxt"
                class="py-20 px-10 aspect-auto shadow-none transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-Accent/50 cursor-pointer">
                <img src="@/assets/images/logonuxt.png" class="w-36 h-36">
            </BlankCard>
            <!--rimuovere blankcard-->
        </div>
        <Transition name="slide-fade" mode="out-in" appear>
            <div class="text-Text dark:text-TextDark text-2xl px-20 text-center pb-48" :key="esperienza">
                {{ esperienza }}
            </div>
        </Transition>
    </div>
</template>

<style>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>