import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/system'

const StyledButton = styled(Button)(({ theme }) => ({
  maxWidth: '416px',
  width: '100%',
  height: '54px',
  borderRadius: '0px',
  border: '1px solid rgba(255, 255, 255, 1.0)',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.text.secondary,
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.primary.light
  }
}))

type BlackButtonProps = ButtonProps & {
  children: React.ReactNode
}

const BlackButton: React.FC<BlackButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default BlackButton
