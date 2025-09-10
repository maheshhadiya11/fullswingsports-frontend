'use client'

import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './filter.module.scss'
import FilterInterface from './filter.interface'
import FilterTag from '../filter_tag/filter_tag'
import Dropdown from '../dropdown/dropdown'

const Filter = (props: FilterInterface) => {
  const { tags, className, onChange, label, dropdownMenuClassName } = props
  const [selectedTagIndex, setSelectedTagIndex] = useState<number>(0)

  useEffect(() => {
    if (onChange) {
      onChange(selectedTagIndex)
    }
  }, [selectedTagIndex])

  return (
    <>
      <div className={cn(styles.root, className)}>
        {tags.map((tag, index) => (
          <FilterTag
            key={tag}
            label={tag}
            selected={index === selectedTagIndex}
            onClick={() => setSelectedTagIndex(index)}
          />
        ))}
      </div>
      <div className={cn(styles.mobileFilter, className)}>
        <span className={cn(styles.dropdownLabel)}>{label}</span>
        <Dropdown
          className={styles.dropdown}
          selectedIndex={selectedTagIndex}
          setSelectedIndex={setSelectedTagIndex}
          tags={tags}
          menuClassName={dropdownMenuClassName}
        />
      </div>
    </>
  )
}

export default Filter
