'use client'
import { FC } from 'react'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'
import ColoredButton from '@/common/ui-kit/ColoredButton'

const ActionBlock: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const isMobile = useMediaQuery(`(max-width: 320px)`)

  return (
    <Box
      sx={{
        backgroundImage: 'url("/calltoaction-section-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Stack
        sx={{
          position: 'relative',
          maxWidth: '1440px',
          width: '100%',
          height: '100%',
          gap: '20px',
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
              // '@media (max-width: 320px) ': {
              //   width: '150px',
              //   height: '150px',
              //   top: 8,
              //   right: 0,
              //   left: 20
              // }
            }}
          />
        </Box>

        <Stack
          sx={{
            gap: '30px',
            '@media (max-width: 480px)  and (min-width: 321px)': {
              gap: '25px'
            }
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'primary.light',
              letterSpacing: -2,
              textAlign: 'center',
              m: '0 auto',
              textTransform: 'uppercase',
              maxWidth: '952px',
              width: '100%'

              // '@media (max-width:992px)': {
              //   textIndent: '145px',
              //   maxWidth: isEnglish ? '600px' : '640px'
              // },
              // '@media (max-width:768px)': {
              //   textIndent: '165px',
              //   maxWidth: '100%'
              // },
              // '@media (max-width:480px)': {
              //   textIndent: '0px',
              //   maxWidth: isEnglish ? '100%' : '445px'
              // }
              // '@media (max-width:480px)': { textIndent: '0px', letterSpacing: -2 },
              // '@media (max-width:320px)': { maxWidth: isEnglish ? '100%' : '298px' }
            }}
          >
            {t('action subtitle')}
          </Typography>

          <Stack
            sx={{
              gap: '20px',
              width: '100%',
              '@media (max-width: 992px)': {
                maxWidth: '440px',
                m: '0 auto'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            <Box
              sx={{
                alignSelf: 'center',
                display: 'flex',
                maxWidth: '536px',
                width: '100%',
                height: '28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                justifyContent: 'space-between',
                '@media (max-width: 992px)': {
                  height: '23px',
                  maxWidth: '440px'
                },
                '@media (max-width: 768px)': {
                  maxWidth: '100%'
                },
                '@media (max-width: 320px)': {
                  height: '41px'
                }
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: '130%',
                  '@media (max-width: 992px)': {
                    fontSize: '14px'
                  }
                }}
              >
                {t('action description.first.number')}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: '130%',
                  '@media (max-width: 992px)': {
                    fontSize: '14px'
                  },
                  '@media (max-width: 320px)': {
                    maxWidth: '263px',
                    textAlign: 'end!important'
                  }
                }}
              >
                {t('action description.first.title')}
              </Typography>
            </Box>

            <Box
              sx={{
                alignSelf: 'center',
                display: 'flex',
                maxWidth: '536px',
                width: '100%',
                height: '28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                justifyContent: 'space-between',
                '@media (max-width: 992px)': {
                  height: '23px'
                },
                '@media (max-width: 768px)': {
                  maxWidth: '100%'
                },
                '@media (max-width: 320px)': {
                  height: '41px'
                }
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: '130%',
                  '@media (max-width: 992px)': {
                    fontSize: '14px'
                  }
                }}
              >
                {t('action description.second.number')}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: '130%',
                  '@media (max-width: 992px)': {
                    fontSize: '14px'
                  },
                  '@media (max-width: 320px)': {
                    maxWidth: '263px',
                    textAlign: 'end!important'
                  }
                }}
              >
                {t('action description.second.title')}
              </Typography>
            </Box>

            <Box
              sx={{
                alignSelf: 'center',
                display: 'flex',
                maxWidth: '536px',
                width: '100%',
                height: '28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                justifyContent: 'space-between',
                '@media (max-width: 992px)': {
                  height: '23px'
                },
                '@media (max-width: 768px)': {
                  maxWidth: '100%'
                },
                '@media (max-width: 320px)': {
                  height: '41px'
                }
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: '130%',
                  '@media (max-width: 992px)': {
                    fontSize: '14px'
                  }
                }}
              >
                {t('action description.third.number')}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: '130%',
                  '@media (max-width: 992px)': {
                    fontSize: '14px'
                  },
                  '@media (max-width: 320px)': {
                    maxWidth: '263px',
                    textAlign: 'end!important'
                  }
                }}
              >
                {t('action description.third.title')}
              </Typography>
            </Box>
          </Stack>

          <Box
            component="a"
            href="#form-section"
            sx={{
              maxWidth: '536px',
              width: '100%',
              alignSelf: 'center',
              '@media (max-width: 992px)': {
                maxWidth: '440px',
                m: '0 auto'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            <ColoredButton
              type="button"
              iconWidth="19px"
              iconHeight="19px"
              sx={{
                maxWidth: '536px',
                color: 'primary.light',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'space-between',
                m: '0 auto',

                '@media (max-width: 768px)': {
                  fontSize: '22px',
                  maxWidth: '100%'
                },
                '@media (max-width: 320px) ': {
                  gap: isEnglish ? 0 : '115px'
                }
              }}
            >
              {t('action button')}
            </ColoredButton>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default ActionBlock
