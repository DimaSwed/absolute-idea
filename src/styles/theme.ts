'use client'
import { createTheme, ThemeOptions } from '@mui/material/styles'

const commonSettings: ThemeOptions = {
  breakpoints: { values: { xs: 320, sm: 480, md: 992, lg: 1280, xl: 1440 } }
}

const lightTheme = createTheme({
  ...commonSettings,
  typography: {
    fontFamily: '"Open Sans", "Helvetica Neue", "SF Pro Display", "Roboto", "Inter", sans-serif',
    body1: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '120%',
      transition: 'font-size 2s ease'
    },
    body2: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '110%',
      fontStyle: 'normal'
    },
    button: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 700,
      fontSize: '22px',
      lineHeight: '100%',
      letterSpacing: '-0.02em',
      fontStyle: 'normal',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'font-size 2s ease',
      '@media (max-width:768px)': { fontSize: '34px' },
      '@media (max-width:320px)': { fontSize: '28px' }
    },
    subtitle1: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '16px',
      fontWeight: '600',
      fontStyle: 'normal',
      lineHeight: '125%',
      transition: 'font-size 2s ease',
      '@media (max-width:320px)': { fontSize: '14px' }
    },
    subtitle2: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '110%',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '13px' },
      // '@media (max-width:720px)': { fontSize: '12px' }
    },
    h1: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '120px',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      fontStyle: 'normal',
      lineHeight: '100%',
      textTransform: 'none',
      transition: 'font-size 2s ease',
      '@media (max-width:992px)': { fontSize: '54px' },
      '@media (max-width:768px)': { fontSize: '44px' },
      '@media (max-width:480px)': { fontSize: '32px' }
    },
    h2: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '72px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '100%',
      letterSpacing: '-0.03em',
      textTransform: 'none',
      transition: 'font-size 2s ease'
      // '@media (max-width: 480px)': {
      //   fontSize: '36px'
      // }
    },
    h3: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '36px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '110%',
      letterSpacing: '-0.06em',
      textTransform: 'none',
      transition: 'font-size 2s ease'
      // '@media (max-width: 480px)': {
      //   fontSize: '36px'
      // }
    },
    h4: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '34px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '110%',
      letterSpacing: '-0.06em',
      textTransform: 'none',
      transition: 'font-size 2s ease'
      // '@media (max-width: 480px)': {
      //   fontSize: '36px'
      // }
    },
    h5: {
      fontSize: '20px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '120%',
      textTransform: 'none',
      transition: 'font-size 2s ease'
    }
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#c3c3c3', // Серый (grey) +
      light: '#fff' // Белый (white) +
    },
    secondary: {
      main: '#0a132a' // Темно-серый (dark-grey) +
    },
    background: {
      default: ' #050a18', // Фоновый цвет (bg) +
      paper: 'rgba(255, 255, 255, 0.2)' // Полупрозрачный белый (white-20) +
    },
    text: {
      primary: '#010210', // Текст основной (black) +
      secondary: '#7b61ff' // Темно-синий (purple) +
    },
    success: {
      main: '#f2f2f2' // Светло-серый (light-grey) +
    },
    error: {
      main: '#FF0004' // Ошибка (red) +
    },
    divider: '#00000066'
  }
})

export { lightTheme }
