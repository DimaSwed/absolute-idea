'use client'
import React, { useState } from 'react'
import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/system'

const ArrowIcon = styled('svg')<{ hover?: boolean; width?: string; height?: string }>(
  ({ theme, hover, width, height }) => ({
    width: width || '15px',
    height: height || '15px',
    fill: hover ? theme.palette.text.secondary : 'white',
    transition: 'fill 0.3s'
  })
)

const StyledButton = styled(Button)(({ theme }) => ({
  maxWidth: '261px',
  width: '100%',
  height: '46px',
  borderRadius: '0px',
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  borderBottom: '2px solid white',
  padding: '0',
  transition: '0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary
  }
}))

type ColoredButtonProps = ButtonProps & {
  children: React.ReactNode
  iconWidth?: string // добавлен новый пропс для ширины иконки
  iconHeight?: string // добавлен новый пропс для высоты иконки
}

const ColoredButton: React.FC<ColoredButtonProps> = ({
  children,
  iconWidth,
  iconHeight,
  ...props
}) => {
  const [hover, setHover] = useState(false)

  return (
    <StyledButton
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}{' '}
      <ArrowIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 16"
        hover={hover}
        width={iconWidth}
        height={iconHeight}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.325437 0.825437C0.759353 0.391521 1.46287 0.391521 1.89679 0.825437L12.7778 11.7064V2.88889C12.7778 2.27524 13.2752 1.77778 13.8889 1.77778C14.5025 1.77778 15 2.27524 15 2.88889V15.5H2.38889C1.77524 15.5 1.27778 15.0025 1.27778 14.3889C1.27778 13.7752 1.77524 13.2778 2.38889 13.2778H11.2064L0.325437 2.39679C-0.108479 1.96287 -0.108479 1.25935 0.325437 0.825437Z"
        />
      </ArrowIcon>
    </StyledButton>
  )
}

export default ColoredButton
