import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Logo: FC = () => {
  return (
    <Stack direction="row" alignItems={'center'} gap={1}>
      <Box
        component="img"
        sx={{
          // height: '40px',
          // width: '182px',
          cursor: 'pointer',
          '@media (max-width:480px)': { height: '40px', width: '182px' },
          '@media (max-width:320px)': { height: '33px', width: '150px' }
        }}
        alt="Logo"
        // src="./brand.svg"
        src="./brand2.png"
      />
      <Typography
        sx={{
          textAlign: 'center',
          textDecoration: 'none',
          color: '#fff',
          fontWeight: 800,
          mt: '5px'
        }}
      >
        Absolute Ideas
      </Typography>
    </Stack>
  )
}

export default Logo
