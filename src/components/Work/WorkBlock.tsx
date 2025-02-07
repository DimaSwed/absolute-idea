'use client'
import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import TitleName from '@/common/ui-kit/TittleName'
import { useTranslation } from 'react-i18next'

const WorkBlock: FC = () => {
  const { t } = useTranslation()

  const workKeys: string[] = ['first', 'second', 'third', 'fourth']

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
          mb: '60px',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '30px',
            mb: '0px'
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
          <TitleName title={t('work subtitle')} />
        </Box>
        <Stack sx={{ flex: '1 1 41%' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '60px',
              '@media (max-width:992px)': {
                gap: '30px'
              },
              // '@media (max-width:768px)': { gap: '20px' },
              '@media (max-width:480px)': {
                gridTemplateColumns: 'repeat(1, 1fr)',
                gap: '30px'
              }

              // '@media (max-width: 320px) ': {
              //   gap: '40px'
              // }
            }}
          >
            {workKeys.map((key, index) => {
              const data = t(`work description.${key}`, { returnObjects: true }) as {
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
                    height: '266px',
                    gap: '40px',
                    backgroundColor: 'secondary.main',
                    borderRadius: '10px',
                    p: '20px 10px',
                    '@media (max-width:992px)': {
                      maxWidth: '300px',
                      height: '306px'
                    },
                    '@media (max-width: 768px)': {
                      maxWidth: '354px',
                      height: '275px',
                      p: '20px 7px 20px 10px '
                    },
                    '@media (max-width:480px)': { maxWidth: '100%' }
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: '64px',
                      lineHeight: '110%',
                      letterSpacing: -2,
                      color: 'primary.light',
                      '@media (max-width: 480px)': {
                        fontSize: '54px'
                      }
                    }}
                  >
                    {data.numbers}
                  </Typography>
                  <Stack gap="10px">
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: '22px',
                        color: 'primary.light'
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'primary.main',
                        lineHeight: '125%',
                        '@media (max-width: 1280px) and (min-width: 993px)': {
                          maxWidth: '340px'
                        },
                        '@media (max-width: 320px)': {
                          maxWidth: '245px'
                        }
                      }}
                    >
                      {data.description}
                    </Typography>
                  </Stack>
                </Stack>
              )
            })}
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default WorkBlock
