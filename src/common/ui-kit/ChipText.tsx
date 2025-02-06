import React, { FC } from 'react'
import { Typography, SxProps, Theme } from '@mui/material'

interface ChipTitleProps {
  text: string
  sx?: SxProps<Theme>
}

const ChipText: FC<ChipTitleProps> = ({ text, sx }) => {
  return (
    <Typography
      variant="subtitle1"
      sx={{
        borderRadius: '4px',
        border: '1px solid rgba(123, 97, 255, 1.0)',
        maxWidth: 'fit-content',
        p: '4px 16px',
        textTransform: 'uppercase',
        ...sx
      }}
    >
      {text}
    </Typography>
  )
}

export default ChipText
