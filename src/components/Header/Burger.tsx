'use client'

import React, { FC } from 'react'
import { IconButton } from '@mui/material'
import { useAppDispatch } from '@/store/hooks'
import { openNavReducer } from '@/store/slices/slice-navigation'

export const BurgerMenu = () => {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M38 12H4V9H38V12Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M38 22H4V19H38V22Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M38 32H15V29H38V32Z" fill="white" />
    </svg>
  )
}

export const BurgerButton: FC = () => {
  const dispatch = useAppDispatch()
  const showNavHandler = () => dispatch(openNavReducer())
  return (
    <>
      <IconButton
        edge="start"
        color="primary"
        aria-label="menu"
        onClick={showNavHandler}
        sx={{ p: '0', '@media (min-width:769px)': { display: 'none' } }}
      >
        <BurgerMenu />
      </IconButton>
    </>
  )
}
