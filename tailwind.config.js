module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      sm: '150px',
      md: '250px',
      lg: '350px',
      xl: '450px',
     },

    colors: {
      white: '#fff',
      primary: '#001e40',
      secondary: '#e791a1',
      default: 'rgb(223, 219, 219)',
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
