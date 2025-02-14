import * as React from 'react'
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeWrapper } from '@/providers/provider-theme'
import StoreProvider from '@/providers/provider-store'
import I18nProvider from '@/providers/provider-i18n'
import '@/styles/globals.sass'

import { cookies } from 'next/headers'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'ABSOLUTE IDEAS',
  description: 'ABSOLUTE IDEAS'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang = cookies().get('lang')?.value || 'en'

  return (
    <html lang="en">
      <body style={{ fontFamily: 'Open Sans, sans-serif' }}>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeWrapper>
              <I18nProvider lang={lang}>
                {children}
                <Footer />
              </I18nProvider>
            </ThemeWrapper>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
