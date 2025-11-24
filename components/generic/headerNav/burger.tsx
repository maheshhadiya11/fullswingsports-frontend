'use client'

import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import cn from 'classnames'

import { theme } from 'tailwind.config'
import styles from './burger.module.scss'

const BurgerToggle = ({ toggled, onToggle }: { toggled: boolean; onToggle: (e: boolean) => void }) => {
  const handleToggle = (e: boolean) => {
    onToggle(e)
  }
  return (
    <div className={cn(styles.burger, !toggled && styles.closed)}>
      <Hamburger
        color={theme.colors.fsBlue[50]}
        size={24}
        onToggle={(e) => handleToggle(e)}
        toggled={toggled}
      />
    </div>
  )
}

export default BurgerToggle
