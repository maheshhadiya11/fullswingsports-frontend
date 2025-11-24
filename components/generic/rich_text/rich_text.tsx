import React from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import styles from './rich_text.module.scss'
import RichTextInterface from './rich_text.interface'

const RichText = (props: RichTextInterface) => {
  const { content, className, variant = 'default' } = props
  return <span className={cn(styles.root, className, styles[variant])}>{parse(content || '')}</span>
}

export default RichText
