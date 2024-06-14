<script setup lang="ts">
    const esperienza = ref();
    function displaycpp(){
        esperienza.value="Paragrafo di spiegazione sul perché è bello C++";
    }
    function displayjava(){
        esperienza.value="Paragrafo di spiegazione sul perché è bello Java";
    }
    function displaynuxt(){
        esperienza.value="Paragrafo di spiegazione sul perché è bello NUXT";
    }
</script>

<template>
    <div class="flex flex-row gap-10 w-full h-fit justify-center py-16">
        <BlankCard @click="displaycpp"  class="py-20 px-10 aspect-auto w-fit h-fit shadow-none transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-Accent/50 cursor-pointer"><img src="@/assets/images/logocpp.svg" class="w-36 h-36" ></BlankCard>
        <BlankCard @click="displayjava" class="py-20 px-10 aspect-auto w-fit h-fit shadow-none transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-Accent/50 cursor-pointer"><img src="@/assets/images/logojava.svg" class="w-36 h-36" ></BlankCard>
        <BlankCard @click="displaynuxt" class="py-20 px-10 aspect-auto w-fit h-fit shadow-none transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:shadow-Accent/50 cursor-pointer"><img src="@/assets/images/logocpp.svg" class="w-36 h-36" ></BlankCard>
    </div>
    <Transition name="slide-fade" mode="out-in">
        <div class="text-Text text-2xl px-20 text-center pb-48" :key="esperienza">
            {{ esperienza }}
        </div>
    </Transition>   
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