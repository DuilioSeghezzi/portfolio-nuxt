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
        Accent:'#742593',
        Primary:'#2F8EB6',
        Secondary:'#3B1D72',

        BackgroundDark:'#0d0614',
        // 140921 020708 0d0614
        TextDark:'#DFEFF7',
        AccentDark:'#BB6CDA',
        PrimaryDark:'#49A7D0',
        SecondaryDark:'#AB8DE2'
      },
    },
  },
  plugins: [],
}

