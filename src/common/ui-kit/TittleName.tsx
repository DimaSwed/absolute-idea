import React, { FC } from 'react'
import { Typography, SxProps, Theme } from '@mui/material'

interface TitleNameProps {
  title: string
  sx?: SxProps<Theme>
}

const TitleName: FC<TitleNameProps> = ({ title, sx }) => {
  return (
    <Typography
      variant="h5"
      sx={{
        color: 'primary.main',
        height: '100%',
        textTransform: 'uppercase',
        ...sx
      }}
    >
      {title}
    </Typography>
  )
}

export default TitleName
