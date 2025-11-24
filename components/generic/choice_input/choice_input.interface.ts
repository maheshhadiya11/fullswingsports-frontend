import { HTMLProps } from 'react'

export default interface ChoiceInputInterface extends HTMLProps<HTMLInputElement> {
  className?: string
  indeterminate?: boolean
  disabled?: boolean
  supportText?: string
  label?: string
  type: 'radio' | 'checkbox'
  variant: 'radio' | 'checkbox' | 'checkmark-circle'
}
