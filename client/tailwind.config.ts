import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {}
  },
  darkMode: "selector",
  plugins: [
    typography,
    require('flowbite/plugin')
  ]

} satisfies Config;
