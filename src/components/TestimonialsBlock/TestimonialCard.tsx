import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'

interface ITestimonialProps {
  name: string
  position: string
  image: string
  description: string
}

const TestimonialCard: FC<ITestimonialProps> = ({ name, position, image, description }) => {
  return (
    <Stack
      // key={index}
      sx={{
        p: '20px',
        boxSizing: 'border-box',
        backgroundColor: 'secondary.main',
        justifyContent: 'space-between',
        maxWidth: '416px',
        width: '100%',
        height: '528px',
        borderRadius: '10px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          maxWidth: '360px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          maxWidth: '300px',
          minHeight: '615px',
          height: 'fit-content'
        },
        '@media (max-width:768px)': {
          maxWidth: '100%',
          minHeight: '412px',
          height: 'fit-content'
        },
        '@media (max-width:480px)': {
          minHeight: '499px',
          height: 'fit-content'
        },
        '@media (max-width:320px)': {
          minHeight: '615px',
          height: 'fit-content'
        }
      }}
    >
      <Stack gap="20px">
        <Box component={'img'} src={image} sx={{ width: '80px', height: '80px' }} />
        <Typography
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '64px',
            fontWeight: '600',
            fontStyle: 'normal',
            lineHeight: '80%',
            color: 'primary.light'
          }}
        >
          “
        </Typography>

        <Typography
          variant="body1"
          color="primary.main"
          sx={{
            maxWidth: '376px',
            '@media (max-width:1280px)': {
              maxWidth: '320px'
            },
            '@media (max-width:992px)': {
              maxWidth: '260px'
            },
            '@media (max-width:768px)': {
              maxWidth: '100%'
            }
            // '@media (max-width:480px)': {
            //   maxWidth: '100%'
            // },
            // '@media (max-width:320px)': { fontSize: '16px' }
          }}
        >
          {description}
        </Typography>
      </Stack>

      <Box>
        <Typography variant="body2" sx={{ color: 'primary.light', mb: '5px', lineHeight: '120%' }}>
          {name}
        </Typography>
        <Typography variant="subtitle2" sx={{ lineHeight: '130%', color: 'primary.main' }}>
          {position}
        </Typography>
      </Box>
    </Stack>
  )
}

export default TestimonialCard
