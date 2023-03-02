/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#37CDBE",
          neutral: "#3A4256",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'shippori': ['Shippori Mincho']
    },
    extend: {
      //     backgroundImage: theme => ({
      //       'hero-pattern': "url('https://ibb.co/WDsBsBt')",
      // })
    },
  },
  plugins: [require("daisyui")],
}