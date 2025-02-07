'use client'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import TestimonialCard from './TestimonialCard'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

interface TestimonialSliderProps {
  prevEl: React.RefObject<HTMLDivElement>
  nextEl: React.RefObject<HTMLDivElement>
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({ prevEl, nextEl }) => {
  const { t } = useTranslation()
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  useEffect(() => {
    if (swiperInstance && prevEl.current && nextEl.current) {
      // Проверяем, есть ли объект `navigation`
      if (
        swiperInstance.params.navigation &&
        typeof swiperInstance.params.navigation !== 'boolean'
      ) {
        swiperInstance.params.navigation.prevEl = prevEl.current
        swiperInstance.params.navigation.nextEl = nextEl.current
        swiperInstance.navigation.init()
        swiperInstance.navigation.update()
      }
    }
  }, [swiperInstance, prevEl, nextEl])

  const testimonialsKeys = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Swiper
        modules={[Navigation]}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        spaceBetween={60}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 }, // Для устройств до 480px
          480: { slidesPerView: 1, spaceBetween: 0 }, // Для устройств до 480px
          768: { slidesPerView: 1, spaceBetween: 0 }, // Для устройств от 481px до 768px
          992: { slidesPerView: 3, spaceBetween: 30 } // Для устройств от 769px до 992px
        }}
        navigation={{ prevEl: prevEl.current, nextEl: nextEl.current }}
        onSwiper={setSwiperInstance}
      >
        {testimonialsKeys.map((key, idx) => {
          const testimonial = t(`testimonials description.${key}`, { returnObjects: true }) as {
            name: string
            position: string
            image: string
            description: string
          }
          return (
            <SwiperSlide key={idx}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  )
}

export default TestimonialSlider
