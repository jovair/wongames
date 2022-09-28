export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#FD7813',
    secondary: '#FE3B08',
    tertiary: '#26E55F',
    quaternary: '#E2306C',
    quinary: '#FEBB08',

    white: '#FAFAFA',
    black: '#030517',
    darkGray: '#393939',
    gray: '#787878',
    mediumGray: '#949494',
    lessGray: '#C7C7C7',
    lightGray: '#E7E7E7',

    bgColor: '#FAFAFA',
    hover: '#F1A66D',
    select: '#DE721F'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
