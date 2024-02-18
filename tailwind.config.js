module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Look for classes to purge in these files
  ],
  theme: {
    extend: {}, // Extend the default Tailwind CSS theme here if needed
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'], // Example sans-serif font stack
      'serif': ['ui-serif', 'Georgia', 'serif'], // Example serif font stack
      'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'], // Example monospace font stack
      'display': ['Oswald', 'sans-serif'], // Example font stack for display headings
      'body': ['"Open Sans"', 'sans-serif'], // Example font stack for body text
    }
  },
  plugins: [], // Add any custom Tailwind CSS plugins here if needed
};
