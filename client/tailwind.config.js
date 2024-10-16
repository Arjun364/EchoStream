const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // flowbite
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":"poppins",
        "Edu":["Edu AU VIC WA NT Dots","cursive"],
        "Jacquarda":["Jacquarda Bastarda 9","serif"],
      }
    },
  },
  plugins: [
    // added flowbite plugin
    // require('flowbite/plugin'),
    flowbite.plugin(),
    
  ],
}

