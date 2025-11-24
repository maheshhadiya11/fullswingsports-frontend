import React from 'react'
import cn from 'classnames'
import styles from './filter_tag.module.scss'
import FilterTagInterface from './filter_tag.interface'

const FilterTag = (props: FilterTagInterface) => {
  const { label, disabled = false, onClick, selected } = props
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(styles.root, selected && styles.selected)}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default FilterTag
