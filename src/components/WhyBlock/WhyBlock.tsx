'use client'
import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import TitleName from '@/common/ui-kit/TittleName'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'

const WhyBlock: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const whyKeys: string[] = ['first', 'second', 'third', 'fourth', 'fifth']

  return (
    <Stack
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '100%',
        gap: '100px',
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
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '10px'
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
          <TitleName title={t('why subtitle')} />
        </Box>
        <Stack
          sx={{
            flex: '1 1 50%',
            gap: '40px'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'primary.light',
              textTransform: 'uppercase',
              maxWidth: isEnglish ? '952px' : '940px',
              width: '100%',
              textIndent: '270px',
              '@media (max-width:1280px)': {
                textIndent: '220px'
              },
              '@media (max-width:992px)': {
                textIndent: '145px',
                maxWidth: '660px'
              },
              '@media (max-width:768px)': {
                textIndent: isEnglish ? '165px' : '215px',
                maxWidth: isEnglish ? '100%' : '640px'
              },
              '@media (max-width:480px)': {
                textIndent: '0px',
                maxWidth: isEnglish ? '100%' : '445px'
              }
            }}
          >
            {t('why title 1')} <span style={{ color: '#7b61ff' }}> {t('why title 2')}</span>
            {t('why title 3')} <span style={{ color: '#7b61ff' }}> {t('why title 4')}</span>{' '}
            {t('why title 5')} <span style={{ color: '#7b61ff' }}> {t('why title 6')}</span>{' '}
            {t('why title 7')}
            <span style={{ color: '#7b61ff' }}> {t('why title 8')}</span>
            {t('why title 9')}
          </Typography>

          <Stack gap="10px">
            {whyKeys.map((key, index) => {
              const data = t(`why description.${key}`, { returnObjects: true }) as {
                title: string
                description: string
              }

              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: '10px 0',
                    borderTop: '1px solid #FFFFFF33',
                    '@media (max-width:480px)': {
                      flexDirection: 'column',
                      gap: '20px'
                    }
                  }}
                >
                  <Typography variant="h5" sx={{ fontSize: '22px' }}>
                    {data.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary.main"
                    sx={{
                      maxWidth: '416px',
                      '@media (max-width:1280px)': {
                        maxWidth: '304px'
                      },
                      '@media (max-width:992px)': {
                        maxWidth: '300px'
                      },
                      '@media (max-width:768px)': {
                        maxWidth: '354px'
                      },
                      '@media (max-width:480px)': {
                        maxWidth: '100%'
                      },
                      '@media (max-width:320px)': { fontSize: '16px' }
                    }}
                  >
                    {data.description}
                  </Typography>
                </Box>
              )
            })}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default WhyBlock
