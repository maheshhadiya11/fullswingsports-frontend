import { HTMLProps } from 'react'

export default interface RichTextInterface extends HTMLProps<HTMLSpanElement> {
  content: string
  variant?: 'default' | 'ttac'
}
