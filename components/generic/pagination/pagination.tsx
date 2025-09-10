'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import styles from './pagination.module.scss'
import PaginationInterface from './pagination.interface'

const NavigationArrowLeft = dynamic(() => import('components/svg/NavigationArrowLeft'), { ssr: false })

const Pagination = (props: PaginationInterface) => {
  const { selectedIndex, setSelectedIndex, length, className, itemAriaLabel = 'Go to item number' } = props

  const [isClickable, setIsClickable] = useState(true)

  const handlePrevClick = () => {
    if (!isClickable) return
    setSelectedIndex(selectedIndex - 1)
    setIsClickable(false)
    setTimeout(() => setIsClickable(true), 300)
  }

  const handleNextClick = () => {
    if (!isClickable) return
    setSelectedIndex(selectedIndex + 1)
    setIsClickable(false)
    setTimeout(() => setIsClickable(true), 300)
  }

  return (
    <div className={cn(styles.root, className)}>
      <button
        title="Go to previous item"
        type="button"
        className={cn(styles.prevButton, selectedIndex === 0 && styles.disabled)}
        disabled={selectedIndex === 0}
        onClick={handlePrevClick}
      >
        <NavigationArrowLeft className={cn(styles.navArrow)} />
      </button>
      <div className={cn(styles.bulletContainer)}>
        {Array.from({ length }).map((_, index) => (
          <button
            aria-label={`${itemAriaLabel} ${index + 1}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={cn(styles.paginationItem, selectedIndex === index && styles.activePaginationItem)}
            key={index}
          />
        ))}
      </div>
      <button
        title="Go to next item"
        type="button"
        className={cn(styles.nextButton, selectedIndex === length - 1 && styles.disabled)}
        onClick={handleNextClick}
        disabled={selectedIndex === length - 1}
      >
        <NavigationArrowLeft className={cn(styles.navArrow, 'rotate-180')} />
      </button>
    </div>
  )
}

export default Pagination
