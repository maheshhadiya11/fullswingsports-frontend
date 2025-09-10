import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import styles from './dropdown.module.scss'
import DropdownInterface from './dropdown.interface'

const IndicatorArrow = dynamic(() => import('components/svg/IndicatorArrow'), {
  ssr: false,
})

const Dropdown = (props: DropdownInterface) => {
  const { tags, setSelectedIndex, selectedIndex, label, className, menuClassName } = props

  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setSelectedValue(value)
    setSelectedIndex(tags.indexOf(value))
  }

  useEffect(() => {
    setSelectedValue(tags[selectedIndex] || null)
  }, [selectedIndex, tags])
  return (
    <div className={cn(styles.root, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <Select
        className={styles.select}
        value={selectedValue || ''}
        onChange={handleChange}
        IconComponent={IndicatorArrow}
        MenuProps={{
          classes: { paper: menuClassName },
          PaperProps: {
            sx: {
              boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 0.20)',
              borderRadius: '0.8rem',
            },
          },
        }}
        sx={{
          '& .MuiSelect-icon': {
            top: '50%',
            transform: 'translateY(-50%) rotate(180deg)',
            transition: 'transform 0.3s ease-in-out',
          },
          '& .MuiSelect-iconOpen': {
            transform: 'translateY(-50%) rotate(0deg)',
          },
        }}
      >
        {tags.map((tag, idx) => (
          <MenuItem
            className={cn(styles.menuItem, idx === selectedIndex && styles.selectedMenuItem)}
            key={tag}
            value={tag}
          >
            {tag}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default Dropdown
