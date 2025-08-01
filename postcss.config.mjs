/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Use the dedicated PostCSS plugin
    autoprefixer: {},
  },
};

export default config;
