'use client'
import { FC } from 'react'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import TitleName from '@/common/ui-kit/TittleName'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'
import ChipText from '@/common/ui-kit/ChipText'

const ServiceBlockContextTwo: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const isDesktop = useMediaQuery(`(max-width: 992px) and (min-width: 769px)`)
  const isMobile = useMediaQuery(`(max-width: 480px) and (min-width: 321px)`)

  return (
    <Box
      sx={{
        display: 'flex',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
          gap: '10px'
        }
        // '@media (max-width: 320px) ': {
        //   mb: '40px'
        // }
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
        <TitleName title={t('services it subtitle')} />
      </Box>
      <Stack
        sx={{
          flex: '1 1 50%',
          gap: '40px',
          '@media (max-width:480px)': {
            gap: '30px'
          }
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'primary.light',
            textTransform: 'uppercase',
            maxWidth: isEnglish ? '952px' : '943px',
            width: '100%',
            textIndent: '270px',
            '@media (max-width:992px)': {
              textIndent: '145px',
              maxWidth: isEnglish ? '600px' : '640px'
            },
            '@media (max-width:768px)': {
              textIndent: '165px',
              maxWidth: '100%'
            },
            '@media (max-width:480px)': {
              textIndent: '0px',
              maxWidth: isEnglish ? '100%' : '445px'
            }
            // '@media (max-width:480px)': { textIndent: '0px', letterSpacing: -2 },
            // '@media (max-width:320px)': { maxWidth: isEnglish ? '100%' : '298px' }
          }}
        >
          {t('services it title 1')}{' '}
          <span style={{ color: '#7b61ff' }}> {t('services it title 2')}</span>{' '}
          {t('services it title 3')}{' '}
          <span style={{ color: '#7b61ff' }}> {t('services it title 4')}</span>{' '}
          {isEnglish && t('services it title 5')}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '60px',
            alignItems: 'center',
            '@media (max-width:992px)': {
              gap: '30px'
            },
            '@media (max-width:768px)': {
              gap: '20px'
            },
            '@media (max-width:480px)': {
              flexDirection: 'column'
            }
          }}
        >
          <Box
            component={'img'}
            src={
              isDesktop
                ? './services/it-image.png'
                : isMobile
                  ? './services/it-image.png'
                  : './services/it-image.png'
            }
            sx={{
              maxWidth: '476px',
              width: '100%',
              height: '360px',
              '@media (max-width:1280px)': {
                maxWidth: '420px',
                height: '318px'
              },
              '@media (max-width:992px)': {
                maxWidth: '330px',
                height: '282px'
              },
              '@media (max-width:768px)': {
                maxWidth: '354px',
                height: '268px'
              },
              '@media (max-width:480px)': {
                maxWidth: '448px',
                height: '270px'
              }
            }}
          />
          <Stack
            sx={{
              gap: '40px',
              maxWidth: '416px',
              width: '100%',
              '@media (max-width:1280px)': { maxWidth: '360px' },
              '@media (max-width:992px)': {
                maxWidth: '300px'
              },
              '@media (max-width:768px)': {
                maxWidth: isEnglish ? '354px' : '353px'
              },
              '@media (max-width:480px)': {
                maxWidth: '100%'
              }
            }}
          >
            <Typography
              variant="subtitle1"
              color="success.main"
              sx={{
                maxWidth: '416px',
                '@media (max-width:480px)': {
                  maxWidth: '100%',
                  fontSize: '16px'
                }
              }}
            >
              {t('services it body text')}
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <ChipText text={t('services it description.title 1')} />
              <ChipText text={t('services it description.title 2')} />
              <ChipText text={t('services it description.title 3')} />
              <ChipText text={t('services it description.title 4')} />
              <ChipText text={t('services it description.title 5')} />
              <ChipText text={t('services it description.title 6')} />
              <ChipText text={t('services it description.title 7')} />
              <ChipText text={t('services it description.title 8')} />
              <ChipText text={t('services it description.title 9')} />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default ServiceBlockContextTwo
