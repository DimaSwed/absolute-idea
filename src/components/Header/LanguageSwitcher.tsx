import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import i18next from 'i18next'

interface LanguageSwitcherProps {
  lang: string
  onChangeLang: (lang: string) => void
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lang, onChangeLang }) => {
  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language)
    onChangeLang(language)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: 'primary.main',
        '@media (max-width:768px)': { gap: '15px' }
      }}
    >
      <Typography
        variant="subtitle2"
        onClick={() => changeLanguage('en')}
        color={lang === 'en' ? 'primary.light' : 'primary.main'}
        border="none"
        sx={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '@media (max-width:768px)': { fontSize: '34px', fontWeight: 600 },
          '@media (max-width:320px)': { fontSize: '28px' }
        }}
      >
        ENG
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: 'primary.main',
          '@media (max-width:768px)': { fontSize: '34px', fontWeight: 600 },
          '@media (max-width:320px)': { fontSize: '28px' }
        }}
      >
        /
      </Typography>
      <Typography
        variant="subtitle2"
        onClick={() => changeLanguage('cs')}
        color={lang === 'cs' ? 'primary.light' : 'primary.main'}
        border="none"
        sx={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '@media (max-width:768px)': { fontSize: '34px', fontWeight: 600 },
          '@media (max-width:320px)': { fontSize: '28px' }
        }}
      >
        CS
      </Typography>
    </Box>
  )
}
