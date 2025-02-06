'use client'
import React, { FC, useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { BurgerButton } from './Burger'
import { MobileNav } from './MobileNav'
import Link from 'next/link'
import Logo from '@/common/ui-kit/Logo'
import HeaderListMenu from './HeaderListMenu'
import { LanguageSwitcher } from './LanguageSwitcher'
import Cookies from 'js-cookie'

const Header: FC = () => {
  const [lang, setLang] = useState<string>('en')

  useEffect(() => {
    const storedLang = Cookies.get('lang')
    if (storedLang) {
      setLang(storedLang)
    }
  }, [])

  const handleLangChange = (newLang: string) => {
    setLang(newLang)
    Cookies.set('lang', newLang)
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80px',
        backgroundColor: 'divider',
        boxShadow: 'none',
        borderBottom: '1px solid #FFFFFF33'
        // '@media (max-width:768px)': { height: '82px' }
      }}
    >
      <Box
        display="flex"
        sx={{
          margin: '0 auto',
          maxWidth: '1440px',
          width: '100%',
          position: 'relative',
          padding: '20px 36px',
          justifyContent: 'space-between',
          alignItems: 'center',
          '@media (max-width: 1440px)': {
            padding: '20px 40px'
          },
          '@media (max-width: 1280px)': {
            padding: '20px 40px'
          },
          '@media (max-width: 992px)': {
            padding: '20px 16px'
          },
          '@media (max-width: 768px)': {
            padding: '20px 20px'
          },
          '@media (max-width: 480px)': {
            padding: '20px 16px'
          },
          '@media (max-width: 320px)': {
            padding: '20px 10px'
          }
        }}
      >
        <Link href="/" passHref style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        <Box
          sx={{
            display: 'flex',
            gap: '15px',
            '@media (max-width:768px)': { display: 'none' }
          }}
        >
          <HeaderListMenu />
        </Box>

        <Box
          sx={{
            '@media (max-width:768px)': { display: 'none' }
          }}
        >
          <LanguageSwitcher lang={lang} onChangeLang={handleLangChange} />
        </Box>

        <Box
          display="flex"
          sx={{
            '@media (max-width:768px)': { display: 'none' }
          }}
        >
          <MobileNav lang={lang} onChangeLang={handleLangChange} />

          <a
            href="tel:+420773635962"
            target="_blank"
            style={{
              textDecoration: 'none'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'primary.light',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease-in-out',
                borderBottom: '2px solid transparent',
                '&:hover': {
                  borderBottom: '2px solid white'
                }
              }}
            >
              (+420) 773 635 962
            </Typography>
          </a>
        </Box>
        <BurgerButton />
      </Box>
    </Box>
  )
}

export default Header
