module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add all the relevant paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // Add Tailwind Forms plugin
  ],
};
