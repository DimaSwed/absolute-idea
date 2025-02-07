import React, { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Footer: FC = () => {
  return (
    <Stack
      id="contacts-section"
      sx={{
        maxWidth: '1440px',
        height: 'fit-content',
        m: '0 auto',
        width: '100%',
        padding: '60px 36px',
        gap: '30px',

        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '60px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '60px 16px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          padding: '40px 20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '30px 16px'
        },
        '@media (max-width: 320px)': {
          padding: '30px 10px'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid #FFFFFF33',
          '@media (max-width: 768px)': {
            flexDirection: 'column'
          }
        }}
      >
        <Box
          sx={{
            flex: '1 1 50%',
            pt: '20px'
          }}
        >
          <Typography
            component="a"
            href="https://www.google.com/maps?q=Dlouhá+715/38,+Staré+Město,+110+00+Praha"
            target="_blank"
            rel="noopener noreferrer"
            variant="body1"
            sx={{
              fontWeight: 600,
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: '#C6C6C6',
              cursor: 'pointer',
              '&:hover': { color: 'primary.light' },
              '@media (max-width:320px)': { fontSize: '20px' }
            }}
          >
            Dlouhá 715/38, Staré Město, 110 00 Praha
          </Typography>
        </Box>

        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flex: '1 1 50%',
            gap: '20px',
            pt: '20px'
          }}
        >
          <Typography
            variant="body1"
            component={'a'}
            href="tel:+420773635962"
            sx={{
              textDecoration: 'none',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: '#C6C6C6',
              '&:hover': { color: 'text.secondary' },
              '@media (max-width:320px)': { fontSize: '20px' }
            }}
          >
            +420 773 635 962
          </Typography>

          <Typography
            variant="body1"
            component={'a'}
            href="mailto:info@absoluteideas.com"
            sx={{
              fontWeight: 600,
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: '#C6C6C6',
              '&:hover': { color: 'primary.light' },
              '@media (max-width:320px)': { fontSize: '20px' }
            }}
          >
            info@absoluteideas.com
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          display: 'flex',
          '@media (max-width: 480px)': {
            flexDirection: 'column',
            gap: '5px'
          }
        }}
      >
        <Box
          sx={{
            flex: '1 1 50%'
          }}
        >
          <Typography variant="subtitle1" color="#505050" sx={{ flex: '1 1 50%' }}>
            Absolute Ideas s.r.o. All rights reserved.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: '1 1 50%',
            order: '0',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              // cursor: 'pointer',
              color: '#505050',
              textDecoration: 'none'
              // '&:hover': { color: 'primary.main' }
            }}
          >
            DPH: CZ24228141
          </Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export default Footer
