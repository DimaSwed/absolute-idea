import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

interface HeaderListMenuProps {
  customStyles?: React.CSSProperties
  onClick?: () => void
}

const HeaderListMenu: FC<HeaderListMenuProps> = ({ customStyles, onClick }) => {
  const { t } = useTranslation()

  const sections: { name: string; id: string }[] = [
    { name: t('about'), id: 'about-section' },
    { name: t('services'), id: 'services-section' },
    { name: t('how it works'), id: 'how-it-works-section' },
    { name: t('contacts'), id: 'contacts-section' }
  ]

  return (
    <>
      {sections.map((section) => (
        <Link key={section.name} href={`#${section.id}`}>
          <Typography
            key={section.name}
            // component="a"
            onClick={onClick}
            // href={`#${section.id}`}
            sx={{
              fontFamily: 'Open Sans, sans-serif',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '110%',
              color: 'success.main',
              transition: 'color 0.2s ease-in-out',
              borderBottom: '2px solid transparent',
              '&:hover': {
                borderBottom: '2px solid white'
              },
              '@media (max-width:768px)': {
                fontSize: '44px'
              },
              '@media (max-width:320px)': {
                fontSize: '34px'
              },
              ...customStyles
            }}
          >
            {section.name}
          </Typography>
        </Link>
      ))}
    </>
  )
}

export default HeaderListMenu
