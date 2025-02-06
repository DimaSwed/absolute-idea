'use client'
import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ColoredButton from '@/common/ui-kit/ColoredButton'
import { Language } from '@/models/language.types'

import { useTranslation } from 'react-i18next'

const ContentBlock: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  return (
    <Stack
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        m: '0 auto',
        padding: '80px 36px 100px 36px',
        display: 'flex',
        flexDirection: 'column',
        mt: '80px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '0px 40px 100px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '0px 16px 100px 16px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          mt: '82px',
          padding: '0px 20px 80px 20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          mt: '80px',
          padding: '0px 16px 70px 16px'
        },
        '@media (max-width: 320px) ': {
          mt: '82px',
          padding: '0px 10px 40px 10px'
        }
      }}
    >
      <Box
        sx={{
          minHeight: '518px',
          height: '100%',
          pt: '80px',
          '@media (max-width: 768px) and (min-width: 481px)': {
            pt: '84px',
            minHeight: '390px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            pt: '33px',
            minHeight: '326px'
          },
          '@media (max-width: 320px) ': {
            pt: '20px',
            minHeight: '336px'
          }
        }}
      >
        <Typography
          variant="body1"
          sx={{
            zIndex: 5,
            position: 'relative',
            fontWeight: '600',
            color: 'success.main',
            textTransform: 'uppercase',
            ml: '40px',
            '@media (max-width: 992px) and (min-width: 769px)': {
              ml: '30px'
            },
            '@media (max-width: 768px) and (min-width: 481px)': {
              ml: '22px'
            },
            '@media (max-width: 480px) and (min-width: 321px)': {
              ml: '15px',
              fontSize: '14px'
            },
            '@media (max-width: 320px) ': {
              ml: '0px',
              fontSize: '11px',
              fontWeight: 600
            }
          }}
        >
          {t('content subtitle 1')}
        </Typography>

        <Stack sx={{ position: 'relative' }}>
          <Typography
            variant="h1"
            sx={{
              position: 'relative',
              fontSize: '170px',
              fontWeight: '700',
              letterSpacing: -3,
              color: 'white',
              zIndex: 1,
              textTransform: 'uppercase',

              '&::before': {
                content: '"Absolute"',
                position: 'absolute',
                fontWeight: '700',
                fontStyle: 'normal',
                letterSpacing: -3,
                top: 8,
                left: 8,
                zIndex: -1,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(123, 97, 255, 1.0)'
              },

              '@media (max-width: 1280px) and (min-width: 993px)': {
                fontSize: '145px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                fontSize: '120px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                fontSize: '90px'
              },
              '@media (max-width: 480px) and (min-width: 321px)': {
                fontSize: '60px'
              },
              '@media (max-width: 320px) ': {
                fontSize: '50px',
                top: 0,
                left: 0
              }
            }}
          >
            {t('content title 1')}
          </Typography>

          <Box sx={{ alignSelf: 'flex-end', position: 'absolute', top: '128px' }}>
            <Typography
              variant="h1"
              sx={{
                position: 'relative',
                fontSize: '170px',
                fontWeight: '700',
                letterSpacing: -3,
                color: 'white',
                zIndex: 3,
                textTransform: 'uppercase',

                '&::before': {
                  content: '"Ideas"',
                  position: 'absolute',
                  fontWeight: '700',
                  fontStyle: 'normal',
                  letterSpacing: -3,
                  top: 10,
                  left: 10,
                  zIndex: -1,
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(123, 97, 255, 1.0)'
                },
                '@media (max-width: 1280px) and (min-width: 993px)': {
                  fontSize: '145px',
                  top: -25
                },
                '@media (max-width: 992px) and (min-width: 769px)': {
                  fontSize: '120px',
                  top: -55
                },
                '@media (max-width: 768px) and (min-width: 481px)': {
                  fontSize: '90px',
                  top: -85
                },
                '@media (max-width: 480px) and (min-width: 321px)': {
                  fontSize: '60px',
                  top: -65,
                  left: -30
                },
                '@media (max-width: 320px) ': {
                  fontSize: '50px',
                  top: -80,
                  left: -20
                }
              }}
            >
              {t('content title 2')}
            </Typography>
          </Box>
          <Box
            component={'img'}
            src={'/Holographic.png'}
            sx={{
              position: 'absolute',
              top: '-75px',
              right: '140px',
              width: '490px',
              height: '490px',
              zIndex: 2,
              '@media (max-width: 1280px) and (min-width: 993px)': {
                width: '450px',
                height: '450px',
                right: '110px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                width: '390px',
                height: '390px',
                right: '50px',
                top: '-100px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                width: '280px',
                height: '280px',
                right: '60px',
                top: '-75px'
              },
              '@media (max-width: 480px)  and (min-width: 321px)': {
                width: '180px',
                height: '180px',
                right: '60px',
                top: '-30px'
              },
              '@media (max-width: 320px) ': {
                width: '150px',
                height: '150px',
                top: 8,
                right: 0,
                left: 20
              }
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              maxWidth: '267px',
              width: '100%',
              top: '195px',
              left: '417px',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                top: '170px',
                left: '360px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: '260px',
                top: '150px',
                left: '301px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                maxWidth: '234px',
                top: '120px',
                left: '160px'
              },
              '@media (max-width: 480px) and (min-width: 321px)': {
                maxWidth: '446px',
                top: '160px',
                left: '0px'
              },
              '@media (max-width: 320px) ': {
                maxWidth: '260px',
                top: '160px',
                left: '0px'
              }
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: '600', color: 'primary.main' }}>
              {t('content subtitle 2')}
            </Typography>
          </Box>

          <Box
            component="a"
            href="#form-section"
            sx={{
              position: 'absolute',
              bottom: '-194px',
              left: '417px',
              maxWidth: isEnglish ? '300px' : '210px',
              width: '100%',
              '@media (max-width: 1280px) and (min-width: 993px)': {
                bottom: '-194px',
                left: '360px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                bottom: '-194px',
                left: '301px',
                maxWidth: isEnglish ? '300px' : '210px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                bottom: '-184px',
                left: '160px'
              },
              '@media (max-width: 480px) and (min-width: 321px)': {
                maxWidth: '100%',
                bottom: '-210px',
                left: '0px'
              },
              '@media (max-width: 320px) ': {
                maxWidth: '100%',
                bottom: '-250px',
                left: '0px'
              }
            }}
          >
            <ColoredButton
              type="button"
              sx={{
                color: 'primary.light',
                textTransform: 'uppercase',
                gap: '6px',

                '@media (max-width: 768px) and (min-width: 480px) ': {
                  fontSize: '22px'
                },
                '@media (max-width: 480px)': {
                  maxWidth: '100%',
                  justifyContent: 'space-between'
                },
                '@media (max-width: 320px) ': {
                  fontSize: '22px'
                }
              }}
            >
              {t('content button')}
            </ColoredButton>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default ContentBlock
