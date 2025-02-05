import { FC } from 'react'
import { Divider as MuiDivider, DividerProps } from '@mui/material'

const Divider: FC<DividerProps> = ({ ...props }) => {
  return (
    <MuiDivider
      {...props}
      style={{
        width: '1px',
        height: '100%',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#FFFFFF33'
      }}
    />
  )
}

export default Divider
