import React, { FC, useEffect } from 'react'
import { Box, Drawer, Stack, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { closeNavReducer } from '@/store/slices/slice-navigation'
import Logo from '@/common/ui-kit/Logo'
import HeaderListMenu from './HeaderListMenu'
import { LanguageSwitcher } from './LanguageSwitcher'
export interface IWindowProps {
  window?: () => Window
  lang: string
  onChangeLang: (lang: string) => void
}

const drawerWidth = '100%'

export const MobileNav: FC<IWindowProps> = ({ window, lang, onChangeLang }) => {
  const dispatch = useAppDispatch()
  const showNav = useAppSelector((state) => state.navigation.showNav)

  const closeNavHandler = () => dispatch(closeNavReducer())

  useEffect(() => {
    if (showNav) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
  }, [showNav])

  const drawer = (
    <Box
      position={'relative'}
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          borderBottom: '1px solid #FFFFFF33',
          height: '82px',
          padding: '20px',
          '@media (max-width: 480px)': {
            padding: '20px 16px'
          },
          '@media (max-width: 320px)': {
            padding: '20px 10px'
          }
        }}
      >
        <Logo />
        <Box
          onClick={closeNavHandler}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'divider',
            ':hover': {
              color: '#da4e28',
              '& svg': {
                fill: '#da4e28'
              }
            }
          }}
        >
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="42px"
            height="42px"
            viewBox="0 0 42 42"
            fill="#FFFFFF"
            sx={{
              fill: 'divider',
              cursor: 'pointer'
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.163 10.7931L10.1213 34.8347L8 32.7134L32.0416 8.67175L34.163 10.7931Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00111 10.6212L32.0427 34.6628L34.1641 32.5415L10.1224 8.49987L8.00111 10.6212Z"
              fill="white"
            />
          </Box>
        </Box>
      </Box>

      <Stack
        sx={{
          gap: '60px',
          alignItems: 'center',
          mt: '130px',
          mb: '114px',
          '@media (max-width: 480px)': { mt: '80px', gap: '60px', mb: '130px' },
          '@media (max-width: 320px)': { mt: '60px', gap: '50px', mb: '55px' }
          // m: '0 auto'
          // position: 'absolute',
          // left: 0,
          // right: 0,
          // top: '50%',
          // transform: 'translateY(-50%)'
        }}
      >
        <Stack
          sx={{
            gap: '30px'
          }}
        >
          <HeaderListMenu
            onClick={closeNavHandler}
            customStyles={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '600',
              textAlign: 'center',
              color: 'primary.light'
            }}
          />
        </Stack>
        <Box component={'a'} href="tel:+420773635962" sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              color: 'primary.light',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '28px',
              fontWeight: '600',
              fontStyle: 'normal',
              lineHeight: '110%',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s ease-in-out',

              '&:hover': {
                color: 'primary.light'
              },
              '@media (max-width:768px)': {
                fontSize: '28px'
              },
              '@media (max-width:320px)': {
                fontSize: '20px'
              }
            }}
          >
            (+420) 773 635 962
          </Typography>
        </Box>

        <LanguageSwitcher lang={lang} onChangeLang={onChangeLang} />
      </Stack>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={showNav}
        onClose={closeNavHandler}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { sm: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  )
}
