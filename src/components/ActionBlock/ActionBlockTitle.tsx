'use client'
import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'

const ActionBlockTitle: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        minHeight: '432px',
        height: '100%',
        p: '100px 40px 149px 40px',
        textAlign: 'center',
        '@media (max-width: 992px) and (min-width: 769px)': {
          minHeight: '330px',
          p: '77px 0px 110px 0px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          minHeight: '290px'
        },
        '@media (max-width: 480px)': {
          height: '160px',
          minHeight: 'auto',
          p: 0
        }
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            textTransform: 'uppercase',
            fontSize: '94px',
            letterSpacing: -2,
            position: 'absolute',
            top: '100px',
            left: isEnglish ? '316px' : '212px',
            '@media (max-width: 1280px) and (min-width: 993px)': {
              fontSize: '84px',
              left: isEnglish ? '283px' : '165px'
            },
            '@media (max-width: 992px) and (min-width: 769px)': {
              top: '77px',
              fontSize: '72px',
              left: isEnglish ? '215px' : '134px'
            },
            '@media (max-width: 768px) and (min-width: 481px)': {
              fontSize: '56px',
              top: '80px',
              left: isEnglish ? '135px' : '100px'
            },
            '@media (max-width: 480px)': {
              fontSize: '36px',
              top: '40px',
              left: isEnglish ? '87px' : '37px'
            },
            '@media (max-width: 320px) ': {
              left: isEnglish ? '0px' : '0px'
            }
          }}
        >
          <Box component={'span'} sx={{ zIndex: isEnglish ? 0 : 999, position: 'relative' }}>
            {t('action title 1')}
          </Box>{' '}
          <Box
            component={'span'}
            sx={{
              marginLeft: isEnglish ? '100px' : '80px',
              zIndex: 999,
              position: 'relative',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                marginLeft: isEnglish ? '100px' : '50px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                marginLeft: isEnglish ? '60px' : '35px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                marginLeft: isEnglish ? '80px' : '20px'
              },
              '@media (max-width: 480px) and (min-width: 321px)': {
                marginLeft: isEnglish ? '60px' : '30px'
              },
              '@media (max-width: 320px) ': {
                marginLeft: isEnglish ? '12px' : '20px'
              }
            }}
          >
            {t('action title 2')}
          </Box>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textTransform: 'uppercase',
            fontSize: '94px',
            letterSpacing: -2,
            position: 'absolute',
            top: '189px',
            left: '93px',
            '@media (max-width: 1280px) and (min-width: 993px)': {
              fontSize: '84px',
              left: isEnglish ? 0 : '90px'
            },
            '@media (max-width: 992px) and (min-width: 769px)': {
              top: '146px',
              fontSize: '72px',
              left: isEnglish ? 0 : '60px'
            },
            '@media (max-width: 768px) and (min-width: 481px)': {
              fontSize: '56px',
              top: '137px',
              left: isEnglish ? 0 : '42px'
            },
            '@media (max-width: 480px)': {
              fontSize: '36px',
              top: '77px',
              left: isEnglish ? 0 : '23px'
            },
            '@media (max-width: 320px) ': {
              left: isEnglish ? -40 : 0
            }
          }}
        >
          <Box component={'span'} sx={{ zIndex: '99', position: 'relative' }}>
            {' '}
            {t('action title 3')}
          </Box>
          <Box
            component={'span'}
            sx={{
              zIndex: 0,
              position: 'relative',
              '@media (max-width: 320px) ': {
                zIndex: 3
              }
            }}
          >
            {t('action title 4')}
          </Box>{' '}
          <Box
            component={'span'}
            sx={{
              zIndex: 4,
              position: 'relative',
              marginLeft: isEnglish ? '47px' : '67px',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                marginLeft: isEnglish ? '110px' : '25px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                marginLeft: isEnglish ? '10px' : '25px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                marginLeft: isEnglish ? '20px' : '15px'
              },
              '@media (max-width: 480px)': {
                marginLeft: isEnglish ? '0px' : '0px'
              },
              '@media (max-width: 320px) ': {
                position: isEnglish ? 'relative' : 'absolute',
                left: isEnglish ? 80 : 127,
                top: isEnglish ? 0 : '37px'
              }
            }}
          >
            {t('action title 5')}
          </Box>
        </Typography>
      </Box>
      <Box
        component={'img'}
        src="/Holographic2.png"
        sx={{
          position: 'absolute',
          height: '432px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          '@media (max-width: 992px) and (min-width: 769px)': {
            width: '330px',
            height: '330px',
            left: '52%'
          },

          '@media (max-width: 768px) and (min-width: 481px)': {
            width: '290px',
            height: '290px'
          },
          '@media (max-width: 480px)': {
            width: '160px',
            height: '160px'
          }
        }}
      />
    </Box>
  )
}

export default ActionBlockTitle
