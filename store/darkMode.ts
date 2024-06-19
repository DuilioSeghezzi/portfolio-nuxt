import {defineStore} from 'pinia';

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        darkModeBool: false
    }),
    getters: {
        getDarkState: (state) => state.darkModeBool,
    },
    actions: {
        darkToggle(){
            this.darkModeBool = !this.darkModeBool;
        },
    },
});