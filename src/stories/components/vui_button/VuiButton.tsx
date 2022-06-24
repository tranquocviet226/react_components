import { ReactNode } from 'react'
import './VuiButton.css'
import IconLoading from './assets/ic_loading_white.svg'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset' | undefined
  primary?: boolean
  disabled?: boolean
  loading?: boolean
  color?: string
  children: ReactNode
  onClick?: () => void
}

const VuiButton = ({
  size = 'medium',
  primary = false,
  disabled = false,
  loading = false,
  type = 'button',
  color,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const className = 'vui_button'
  const colors = { white: '#FFF' }

  const mode = primary ? className + '-primary' : className + '-secondary'
  const btnColor = primary ? colors.white : color
  const background = primary ? color : colors.white
  const btnBorder = btnColor && `1px solid ${btnColor}`
  const btnLoading = `${className}-loading ${loading && primary && `${className}-loading-show ${className}-loading-${size}`}`

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={[className, className + `-${size}`, mode].join(' ')}
      style={{ background, color: btnColor, border: btnBorder }}
      {...props}
    >
      {children} <img src={IconLoading} alt='' className={btnLoading} />
    </button>
  )
}

export default VuiButton
