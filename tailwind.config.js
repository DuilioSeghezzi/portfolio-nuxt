/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Tiny5", "sans-serif"],
        title2: ["Source\\ Code\\ Pro", "sans-serif"],
        barcode: ["Libre\\ Barcode\\ 128\\ Text", "monospace"],
        textFont: ["Exo\\ 2", "sans-serif"]
      },
      colors:{
        Background:'#f7fcfd',
        Text:'#081821',
        Accent:'#BB6CDA',
        Primary:'#49A7D0',
        Secondary:'#AB8DE2',

        BackgroundDark:'#020708',
        TextDark:'#DFEFF7',
        AccentDark:'#742593',
        PrimaryDark:'#2F8EB6',
        SecondaryDark:'#3B1D72'
      },
    },
  },
  plugins: [],
}

