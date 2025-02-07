import { FC } from 'react'
import { Box, Stack } from '@mui/material'
import ContactForm from '../FormBlock/Form'
import FormBlockTitle from './FormBlockTitle'

const Form: FC = () => {
  return (
    <Stack
      id="form-section"
      sx={{
        margin: '0 auto',
        maxWidth: '1440px',
        width: '100%',
        padding: '60px 36px 0px 36px',
        display: 'flex',
        rowGap: '6px',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '60px 40px 0px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '60px 16px 0 16px'
        },
        '@media (max-width: 768px)': {
          padding: '60px 20px 0 20px',
          flexDirection: 'column',
          gap: '20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '40px 16px 0px 16px'
        },
        '@media (max-width: 320px) ': {
          padding: '40px 10px 0 10px'
        }
      }}
    >
      <FormBlockTitle />

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          gap: '160px',
          alignItems: 'center',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            gap: '70px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            gap: '0px',
            alignItems: 'start'
          },
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '20px'
          }
        }}
      >
        <Box
          component={'img'}
          src={'/form-image.png'}
          sx={{
            maxWidth: '531px',
            width: '100%',
            height: '534px',
            '@media (max-width: 992px) and (min-width: 769px)': {
              maxWidth: '510px',
              ml: '-30px'
            },
            '@media (max-width: 768px)': {
              order: 2,
              maxWidth: '421px',
              width: '100%',
              height: '423px'
            },
            '@media (max-width: 480px)': {
              maxWidth: '351px',
              height: '353px'
            },
            '@media (max-width:320px)': {
              maxWidth: '300px',
              height: '302px'
            }
          }}
        />

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            '@media (max-width: 992px) and (min-width: 769px)': {
              maxWidth: '480px',
              mt: '-20px'
            }
          }}
        >
          <ContactForm />
        </Box>
      </Box>
    </Stack>
  )
}

export default Form
