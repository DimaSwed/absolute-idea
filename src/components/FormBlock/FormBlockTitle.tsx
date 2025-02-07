'use client'
import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'

const FormBlockTitle: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  return (
    <Stack
      sx={{
        gap: '15px',
        '@media (max-width: 768px)': {
          gap: '0px'
        }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '94px',
          letterSpacing: -2,
          textTransform: 'uppercase',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            fontSize: '84px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            fontSize: '72px'
          },
          '@media (max-width: 768px)': {
            fontSize: '56px'
          },
          '@media (max-width: 480px)': {
            fontSize: '36px'
          }
        }}
      >
        {t('form title 1')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '20px'
          },
          '@media (max-width: 480px)': {
            gap: '10px'
          }
        }}
      >
        <Box
          sx={{
            flex: '1 1 50%',
            '@media (max-width: 768px)': {
              order: 1
            }
          }}
        >
          <Typography
            variant="body1"
            sx={{
              maxWidth: '550px',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                maxWidth: isEnglish ? '550px' : '500px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: isEnglish ? '460px' : '460px'
              },
              '@media (max-width: 768px)': {
                maxWidth: '728px'
              }
            }}
          >
            {t('form subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            flex: '1 1 50%',
            '@media (max-width: 768px)': {
              order: 0
            }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: '94px',
              letterSpacing: -2,
              textTransform: 'uppercase',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                fontSize: '84px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                fontSize: '72px'
              },
              '@media (max-width: 768px)': {
                fontSize: '56px'
              },
              '@media (max-width: 480px)': {
                fontSize: '36px'
              }
            }}
          >
            {t('form title 2')}
          </Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export default FormBlockTitle
