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

  const isDesktopB = useMediaQuery(`(max-width: 1280px) and (min-width: 993px)`)
  const isDesktop = useMediaQuery(`(max-width: 992px) and (min-width: 769px)`)
  const isLaptop = useMediaQuery(`(max-width: 768px) and (min-width: 481px)`)
  const isMobile = useMediaQuery(`(max-width: 480px) and (min-width: 321px)`)
  const isMobileS = useMediaQuery(`(max-width: 320px)`)

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
            maxWidth: isEnglish ? '952px' : '940px',
            width: '100%',
            textIndent: '270px',
            '@media (max-width:1280px)': {
              textIndent: '220px'
              // maxWidth: isEnglish ? '600px' : '640px'
            },
            '@media (max-width:992px)': {
              textIndent: '145px',
              maxWidth: isEnglish ? '600px' : '660px'
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
                ? './services/it-image-desktop.png'
                : isLaptop
                  ? './services/it-image-laptop.png'
                  : isMobile
                    ? './services/it-image-mobile.png'
                    : isMobileS
                      ? './services/it-image-mobileS.png'
                      : './services/it-image.png'
            }
            sx={{
              maxWidth: '476px',
              width: '100%',
              height: '360px',
              '@media (max-width:1280px)': {
                maxWidth: '420px',
                height: isEnglish ? '338px' : '300px'
              },
              '@media (max-width:992px)': {
                maxWidth: '330px',
                height: '358px'
              },
              '@media (max-width:768px)': {
                maxWidth: isEnglish ? '354px' : 'auto',
                height: isEnglish ? '338px' : '300px'
              },
              '@media (max-width:480px)': {
                maxWidth: '448px',
                height: '280px'
              },
              '@media (max-width:320px)': {
                maxWidth: '300px',
                height: '280px'
              }
            }}
          />
          <Stack
            sx={{
              gap: '40px',
              maxWidth: '416px',
              width: '100%',
              '@media (max-width:1280px)': { maxWidth: isEnglish ? '360px' : '370px' },
              '@media (max-width:992px)': {
                maxWidth: isEnglish ? '300px' : '320px'
              },
              '@media (max-width:768px)': {
                maxWidth: isEnglish ? '354px' : '380px'
              },
              '@media (max-width:480px)': {
                maxWidth: '100%',
                gap: '20px'
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
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                '@media (max-width:480px)': {
                  maxWidth: isEnglish ? '100%' : '420px'
                }
              }}
            >
              <ChipText text={t('services it description.title 1')} />
              <ChipText text={t('services it description.title 2')} />
              <ChipText text={t('services it description.title 3')} />
              <ChipText text={t('services it description.title 4')} />
              <ChipText text={t('services it description.title 5')} />
              {isDesktopB || isDesktop || isLaptop ? (
                <ChipText text={t('services it description.title 7')} />
              ) : (
                <ChipText text={t('services it description.title 6')} />
              )}
              {isDesktopB || isDesktop || isLaptop ? (
                <ChipText text={t('services it description.title 6')} />
              ) : (
                <ChipText text={t('services it description.title 7')} />
              )}
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
