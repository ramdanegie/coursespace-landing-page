import React, { FC } from 'react'
import { Box } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  width?: number | string
  height?: number | string
}

const Logo: FC<Props> = ({ onClick, variant, width = 140, height = 'auto' }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src="/logo.png"
        alt="Logo"
        sx={{
          width,
          height,
          filter: variant === 'secondary' ? 'grayscale(1) opacity(0.8)' : 'none',
        }}
      />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
