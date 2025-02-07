import { Stack } from '@mui/material'
import Header from '@/components/Header/Header'
import ContentBlock from '@/components/ContentBlock/ContentBlock'
import AboutBlock from '@/components/AboutBlock/AboutBlock'
import ServicesBlock from '@/components/ServicesBlock/ServicesBlock'
import ActionBlock from '@/components/ActionBlock/ActionBlock'
import WorkBlock from '@/components/Work/WorkBlock'
import WhyBlock from '@/components/WhyBlock/WhyBlock'

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
    >
      <Header />
      <ContentBlock />
      <AboutBlock />
      <ServicesBlock />
      <ActionBlock />
      <WorkBlock />
      <WhyBlock />
    </Stack>
  )
}
