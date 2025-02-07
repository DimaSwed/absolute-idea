'use client'
import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'
import ColoredButton from '@/common/ui-kit/ColoredButton'

const ActionBlockInfo: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const actions: { number: string; title: string }[] = [
    {
      number: t('action description.first.number'),
      title: t('action description.first.title')
    },
    {
      number: t('action description.second.number'),
      title: t('action description.second.title')
    },
    {
      number: t('action description.third.number'),
      title: t('action description.third.title')
    }
  ]

  return (
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
        {actions.map((action, index) => (
          <Box
            key={index}
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
              {action.number}
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
              {action.title}
            </Typography>
          </Box>
        ))}
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
  )
}

export default ActionBlockInfo
