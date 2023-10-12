/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      
      listStyleImage: {
        'bacteriaBullet' : 'url("https://static.igem.wiki/teams/4579/wiki/smallestbulletnew.png")',
      },

      colors: {
        'tallow' : '#fbf9e5',
        'OBrown' : '#dda477',
        'OTallow' : '#f0d2b2',
        'DGreen' : '#839972',
        'BGreen' : '#59694D',
        'LGreen' : '#e7eaca',
        'lavender' : '#dfe0ed',
        'Avocado' : '#697B1D',
        'newtallow' : '#D4E79E',
        'skymagenta' : '#C27DB3',
        'DMagenta' : '#5b2c58',
        'Jasmine' : '#F6E27F',
        'TBD' : '#937b76',
        'accordion1':'#72446D',
        'accordion2':'#845E83',
        'accordion3':'#967898',
        'accordion4':'#A992AD',
        'darkWhite' : '#FCF5D4',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin'),
  ],
}
