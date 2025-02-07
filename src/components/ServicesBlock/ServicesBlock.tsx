import { FC } from 'react'
import { Stack } from '@mui/material'
import ServiceBlockContextOne from './ServiceBlockContextOne'
import ServiceBlockContextTwo from './ServiceBlockContextTwo'

const ServicesBlock: FC = () => {
  return (
    <Stack
      id={'services-section'}
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
      <ServiceBlockContextOne />
      <ServiceBlockContextTwo />
    </Stack>
  )
}

export default ServicesBlock
