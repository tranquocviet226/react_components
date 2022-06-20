import React from 'react'
import './vui_button.css'

interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  children: string
  onClick?: () => void
}

const VuiButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const a = 1 + 2
  const mode = primary ? 'vui-button--primary' : 'vui-button--secondary'
  return (
    <button
    onClick={onClick}
      type="button"
      className={['vui-button', `vui-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  )
}

export default VuiButton
