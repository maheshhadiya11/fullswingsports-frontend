import React from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import styles from './input.module.scss'
import InputInterface, { InputProps, TextareaProps } from './input.interface'

const ErrorCross = dynamic(() => import('components/svg/ErrorCross'), {
  ssr: false,
})
const SuccessCheck = dynamic(() => import('components/svg/SuccessCheck'), {
  ssr: false,
})

const Input = (props: InputInterface) => {
  const { className, error, hint, label, success, disabled, variant = 'text', ...rest } = props

  return (
    <label className={cn(styles.root, className, error && styles.error, disabled && styles.disabled)}>
      {label && <span className={cn(styles.label)}>{label}</span>}
      <div className={cn(styles.inputContainer)}>
        {variant === 'textarea' ? (
          <textarea
            disabled={disabled}
            className={cn(styles.input, styles.textarea)}
            {...(rest as TextareaProps)}
          />
        ) : (
          <input
            disabled={disabled}
            className={cn(styles.input)}
            type="text"
            {...(rest as InputProps)}
          />
        )}
        {error && !disabled && <ErrorCross className={cn(styles.errorCross)} />}
        {success && !disabled && !error && <SuccessCheck className={cn(styles.successCheck)} />}
      </div>
      {hint && <span className={cn(styles.hint)}>{hint}</span>}
    </label>
  )
}

export default Input
