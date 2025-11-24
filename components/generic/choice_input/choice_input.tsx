import React from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import styles from './choice_input.module.scss'
import ChoiceInputInterface from './choice_input.interface'

const Checkmark = dynamic(() => import('components/svg/checkmark'), {
  ssr: false,
})
const Minus = dynamic(() => import('components/svg/minus'), {
  ssr: false,
})

const ChoiceInput = (props: ChoiceInputInterface) => {
  const { className, type, indeterminate, disabled, variant, label, supportText, ...rest } = props

  let Icon
  if (variant === 'checkbox') {
    Icon = indeterminate ? Minus : Checkmark
  } else if (variant === 'checkmark-circle') {
    Icon = Checkmark
  }

  return (
    <div className={cn(styles.root, className)}>
      <label className={cn(styles.label, disabled && styles.disabled)}>
        <input
          disabled={disabled}
          type={type}
          className={styles.hiddenInput}
          {...rest}
        />
        <span className={cn(styles[variant])}>{Icon && <Icon className={styles.icon} />}</span>
        {label && <span className={cn(styles.text)}>{label}</span>}
      </label>
      {supportText && <span className={cn(styles.supportText, disabled && styles.disabled)}>{supportText}</span>}
    </div>
  )
}

export default ChoiceInput
