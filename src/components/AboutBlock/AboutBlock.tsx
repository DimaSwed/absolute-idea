'use client'
import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import TitleName from '@/common/ui-kit/TittleName'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'

const AboutBlock: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const aboutKeys: string[] = ['first', 'second', 'third']

  return (
    <Stack
      id={'about-section'}
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        m: '0 auto',
        padding: '120px 36px 120px 36px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '120px 40px 120px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '120px 16px 120px 16px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          padding: '80px 20px 80px 20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '60px 16px 60px 16px'
        },
        '@media (max-width: 320px) ': {
          padding: '60px 10px 60px 10px'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: '60px',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '10px'
          },
          '@media (max-width: 320px) ': {
            mb: '40px'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 10%',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <TitleName title={t('about subtitle')} />
        </Box>
        <Stack sx={{ flex: '1 1 50%', gap: '20px' }}>
          <Typography
            variant="h3"
            sx={{
              color: 'primary.light',
              textTransform: 'uppercase',
              maxWidth: isEnglish ? '952px' : '945px',
              width: '100%',
              textIndent: '270px',
              '@media (max-width:992px)': {
                textIndent: '180px',
                maxWidth: '650px'
              },
              '@media (max-width:768px)': { textIndent: '165px', maxWidth: '100%' },
              '@media (max-width:480px)': { textIndent: '0px', letterSpacing: -2 },
              '@media (max-width:320px)': { maxWidth: isEnglish ? '100%' : '298px' }
            }}
          >
            {t('about title 1')} <span style={{ color: '#7b61ff' }}> {t('about title 2')}</span>{' '}
            {t('about title 3')} <span style={{ color: '#7b61ff' }}> {t('about title 4')}</span>{' '}
            {t('about title 5')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '684px',
              alignSelf: 'flex-end',
              color: 'success.main',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                maxWidth: '600px'
              },
              '@media (max-width:992px)': {
                maxWidth: '480px'
              },
              '@media (max-width:768px)': {
                maxWidth: '100%'
              }
            }}
          >
            {t('about body text')}
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '60px',
          '@media (max-width:992px)': {
            gap: '30px'
          },
          '@media (max-width:768px)': { gap: '20px' },
          '@media (max-width:480px)': { flexDirection: 'column' },
          '@media (max-width: 320px) ': {
            gap: '40px'
          }
        }}
      >
        {aboutKeys.map((key, index) => {
          const data = t(`about description.${key}`, { returnObjects: true }) as {
            numbers: string
            image: string
            title: string
            description: string
          }

          return (
            <Stack
              key={index}
              sx={{
                maxWidth: '416px',
                width: '100%',
                gap: '20px',
                backgroundColor: 'secondary.main',
                borderRadius: '10px',
                p: '20px',
                '@media (max-width:768px)': { pr: '18px' },
                '@media (max-width:480px)': { maxWidth: '100%', pr: '20px' }
              }}
            >
              <Box component={'img'} src={data.image} sx={{ width: '80px', height: '80px' }} />
              <Typography
                sx={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '64px',
                  fontWeight: '600',
                  fontStyle: 'normal',
                  lineHeight: '80%',
                  color: 'primary.light'
                }}
              >
                {data.numbers}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: '22px',
                  color: 'primary.light'
                }}
              >
                {data.title}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'primary.main', lineHeight: '130%' }}>
                {data.description}
              </Typography>
            </Stack>
          )
        })}
      </Box>
    </Stack>
  )
}

export default AboutBlock
