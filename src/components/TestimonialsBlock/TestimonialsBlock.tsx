'use client'
import { FC, useRef, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import TitleName from '@/common/ui-kit/TittleName'
import { useTranslation } from 'react-i18next'
import { Language } from '@/models/language.types'
import TestimonialSlider from './TestimonialSlider'
import 'swiper/css'
import 'swiper/css/navigation'

const TestimonialsBlock: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  // Refs для кнопок навигации
  const prevRef = useRef<HTMLDivElement | null>(null)
  const nextRef = useRef<HTMLDivElement | null>(null)

  return (
    <Stack
      sx={{
        position: 'relative',
        maxWidth: '1440px',
        width: '100%',
        height: '100%',
        gap: '40px',
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
          '@media (max-width: 320px)': {
            flexDirection: 'column',
            gap: '20px'
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
          <TitleName title={t('testimonials subtitle')} />
        </Box>

        <Box sx={{ display: 'flex', gap: '30px' }}>
          <Box
            component={'img'}
            ref={prevRef}
            src="/icons/arrow-left-grey.svg"
            sx={{
              width: '42px',
              height: '42px',
              borderRadius: 500,
              backgroundColor: '#FFFFFF33',
              transition: 'all ease 0.2s',
              '&:hover': {
                backgroundColor: 'text.secondary'
              }
            }}
          />
          <Box
            component={'img'}
            ref={nextRef}
            src="/icons/arrow-right-grey.svg"
            sx={{
              width: '42px',
              height: '42px',
              borderRadius: 500,
              backgroundColor: '#FFFFFF33',
              transition: 'all ease 0.2s',
              '&:hover': {
                backgroundColor: 'text.secondary'
              }
            }}
          />
        </Box>
      </Box>

      <TestimonialSlider prevEl={prevRef} nextEl={nextRef} />
    </Stack>
  )
}

export default TestimonialsBlock
