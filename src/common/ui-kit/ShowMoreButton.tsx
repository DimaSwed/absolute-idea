import { FC } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

export const ShowMoreButton = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 255, 255, 1.0)',
  color: theme.palette.primary.light,
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '18px',
  fontWeight: '700',
  fontStyle: 'normal',
  lineHeight: '100%',
  letterSpacing: -2,
  textTransform: 'uppercase',
  borderRadius: '0px',
  outline: 'none'
  // '&:hover': {
  //   backgroundColor: theme.palette.primary.light
  // }
  // '&:focus': {
  //   backgroundColor: theme.palette.background.paper
  // },
  // '&:active': {
  //   backgroundColor: theme.palette.background.paper
  // }
}))

const ArrowIcon = styled('img')(() => ({
  width: '22px',
  height: '22px'
}))

interface ShowMoreProps {
  isExpanded: boolean
  onClick: () => void
  text: string
}

const ShowMore: FC<ShowMoreProps> = ({ isExpanded, onClick, text }) => {
  return (
    <ShowMoreButton onClick={onClick}>
      {text}
      <ArrowIcon
        src={isExpanded ? '/icons/icon-arrow-up-white.svg' : '/icons/icon-arrow-down-white.svg'}
        alt="Arrow Icon"
      />
    </ShowMoreButton>
  )
}

export default ShowMore
