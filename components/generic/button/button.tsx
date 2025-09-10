import React, { HTMLProps } from 'react'
import cn from 'classnames'
import { Link as LinkProps } from 'interfaces/fragments/link'
import Link from 'next/link'
import styles from './button.module.scss'
import Icon, { IconOption } from '../icon/icon'

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'icon' | undefined

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  link?: LinkProps | undefined
  variant?: ButtonVariant
  layout?: 'small' | 'large' | undefined
  icon?: IconOption
  className?: string | undefined
  label?: string | undefined
}

const Button = ({
  link,
  variant,
  layout,
  className,
  label,
  icon,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...rest
}: ButtonProps) => {
  const buttonClass = cn(styles.root, variant && styles[variant], layout && styles[layout], className)

  return link?.url ? (
    <Link
      href={link.url}
      className={buttonClass}
      target={link.target && '_blank'}
      title={label ?? link.title}
      // @ts-ignore
      onMouseEnter={onMouseEnter}
      // @ts-ignore
      onMouseLeave={onMouseLeave}
      // @ts-ignore
      onClick={onClick}
    >
      <span>{variant !== 'icon' && (label ?? link.title)}</span>
      {icon && <Icon icon={icon} />}
    </Link>
  ) : label || icon ? (
    <button
      {...rest}
      type="button"
      className={buttonClass}
      title={label}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon && <Icon icon={icon} />}
      <span>{label && variant !== 'icon' && label}</span>
    </button>
  ) : null
}

export default Button
