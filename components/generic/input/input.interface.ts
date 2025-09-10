import { HTMLProps, ChangeEventHandler } from 'react'

type BaseProps = {
  error?: boolean
  success?: boolean
  hint?: string
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export interface InputProps extends HTMLProps<HTMLInputElement>, BaseProps {
  variant?: 'text'
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export interface TextareaProps extends HTMLProps<HTMLTextAreaElement>, BaseProps {
  variant: 'textarea'
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

type InputInterface = InputProps | TextareaProps
export default InputInterface
