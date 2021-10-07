module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        'dracula-custom': { // custom theme
          "primary": "#793ef9",
          "primary-focus": "#570df8",
          "primary-content": "#1d1e25",
          "secondary": "#b9ffb3",
          "secondary-focus": "#8aff80",
          "secondary-content": "#1d1e25",
          "accent": "#ffffb3",
          "accent-focus": "#ffff80",
          "accent-content": "#1d1e25",
          "neutral": "#22212c",
          "neutral-focus": "#1d1e25",
          "neutral-content": "#d5ccff",
          "base-100": "#302f3d",
          "base-200": "#22212c",
          "base-300": "#1d1e25",
          "base-content": "#d5ccff",
          "info": "#66c6ff",
          "success": "#87d039",
          "warning": "#e2d562",
          "error": "#ff6f6f"
        },
        'dracula-skyhouse': { // skyhouse main theme
          "primary": "#1f5df9",
          "primary-focus": "#0022EE",
          "primary-content": "#fafafa",
          "secondary": "#b9ffb3",
          "secondary-focus": "#8aff80",
          "secondary-content": "#1d1e25",
          "accent": "#5865F2",
          "accent-focus": "#717bf0",
          "accent-content": "#fafafa",
          "neutral": "#22212c",
          "neutral-focus": "#1d1e25",
          "neutral-content": "#d5ccff",
          "base-100": "#302f3d",
          "base-200": "#22212c",
          "base-300": "#1d1e25",
          "base-content": "#d5ccff",
          "info": "#66c6ff",
          "success": "#87d039",
          "warning": "#e2d562",
          "error": "#ff6f6f"
        }
      }
    ],
  },
}
