'use client'
import React from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

const SubmittedText = () => {
  const { t } = useTranslation()

  return (
    <Box
      component="h2"
      sx={{
        maxWidth: '400px',
        lineHeight: '110%',
        color: 'primary.light'
      }}
    >
      {t('form submitted text 1')} <br /> {t('form submitted text 2')}
    </Box>
  )
}

export default SubmittedText
