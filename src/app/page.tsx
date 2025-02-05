import { Stack } from '@mui/material'

export const metadata = {
  title: 'ABSOLUTE IDEAS',
  description: 'ABSOLUTE IDEAS',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function Home() {
  return (
    <Stack
      component="main"
      sx={{
        backgroundColor: 'background.default',
        overflow: 'hidden',
        fontFamily: 'Open Sans, sans-serif',
        color: 'primary.light'
      }}
    ></Stack>
  )
}
