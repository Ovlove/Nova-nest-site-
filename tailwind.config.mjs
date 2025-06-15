// tailwind.config.mjs
import typography from '@tailwindcss/typography'; // ✅ Import Typography plugin

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#1e40af',
        secondary: '#64748b',
        accent: '#10b981',
      },
    },
  },
  plugins: [typography], // ✅ Register the plugin here
};
