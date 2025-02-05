import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/system'

const StyledButton = styled(Button)(({ theme }) => ({
  maxWidth: '892px',
  width: '100%',
  height: '60px',
  borderRadius: '0px',
  backgroundColor: 'transparent',
  color: theme.palette.primary.light,
  border: '1px solid rgba(255, 255, 255, 1.0)',
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary
  }
}))

type ColoredButtonProps = ButtonProps & {
  children: React.ReactNode
}

const ColoredButton: React.FC<ColoredButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default ColoredButton
