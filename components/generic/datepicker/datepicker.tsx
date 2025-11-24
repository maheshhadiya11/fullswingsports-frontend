'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import { DesktopDatePicker, DateView, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import dynamic from 'next/dynamic'
import { Popper, PopperProps } from '@mui/material'
import {
  DatePickerToolbarProps,
  ExportedDatePickerToolbarProps,
} from '@mui/x-date-pickers/DatePicker/DatePickerToolbar'
import styles from './datepicker.module.scss'
import DatepickerInterface from './datepicker.interface'

const IndicatorArrow = dynamic(() => import('components/svg/IndicatorArrow'), {
  ssr: false,
})
const CheckvronLeft = dynamic(() => import('components/svg/chevronLeft'), {
  ssr: false,
})

interface CustomToolbarProps extends DatePickerToolbarProps<Dayjs> {
  setOpenView: (view: DateView) => void
  openView: DateView
  date: Dayjs
}

const CustomToolbar = (props: CustomToolbarProps) => {
  const { date, setOpenView, openView, onChange } = props
  const formattedDate = date ? dayjs(date).format('MMMM YYYY') : dayjs().format('MMMM YYYY')

  const handleMonthChange = (operation) => {
    const currentDate = date || dayjs()
    const newDate = dayjs(currentDate).add(operation, 'month')
    onChange(newDate)
  }

  const toggleOpenView = () => {
    const newView = openView === 'day' ? 'year' : 'day'
    setOpenView(newView)
  }

  return (
    <div className={styles.customToolbarRoot}>
      <button
        type="button"
        className={styles.customToolbarButton}
        onClick={() => handleMonthChange(-1)}
      >
        <CheckvronLeft />
      </button>
      <button
        type="button"
        className={styles.customToolbarLabel}
        onClick={toggleOpenView}
      >
        {formattedDate}
      </button>
      <button
        type="button"
        className={styles.customToolbarButton}
        onClick={() => handleMonthChange(1)}
      >
        <CheckvronLeft className="rotate-180" />
      </button>
    </div>
  )
}

const CustomPopper = (props: PopperProps) => {
  const { sx, ...rest } = props
  return (
    <Popper
      {...rest}
      className={styles.popper}
      sx={{ ...sx, zIndex: 1400 }}
    />
  )
}

const Datepicker = (props: DatepickerInterface) => {
  const { className, label, onChange } = props
  const [selectedDate, setSelectedDate] = useState<null | dayjs.Dayjs>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [openView, setOpenView] = useState<DateView | undefined>('day')

  const handleOpen = () => {
    setIsOpen(true)
  }

  const onDateChange = (newValue) => {
    setSelectedDate(dayjs(newValue))
    onChange(newValue)
  }

  const formattedDate = selectedDate ? dayjs(selectedDate).format('MMM D, YYYY') : 'Select Date'

  return (
    <div className={cn(styles.root, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <button
          className={cn(styles.datePickerButton, isOpen && styles.dropdownOpen)}
          type="button"
          onClick={handleOpen}
        >
          <span className={cn(styles.inputText)}>{formattedDate}</span>
          <IndicatorArrow
            className={cn(styles.indicatorArrow, !isOpen ? 'rotate-180' : 'rotate-0', styles.indicatorArrow)}
          />
          <DesktopDatePicker
            open={isOpen}
            onClose={() => {
              // 🏎️ prevent state race condition
              setTimeout(() => {
                setIsOpen(false)
              }, 20)
            }}
            closeOnSelect
            onAccept={() => {
              // 🏎️ prevent state race condition
              setTimeout(() => {
                setIsOpen(false)
              }, 20)
            }}
            showDaysOutsideCurrentMonth
            className={styles.datePicker}
            fixedWeekNumber={6}
            value={selectedDate}
            onChange={(newValue) => {
              onDateChange(newValue)
            }}
            openTo={openView}
            slotProps={{
              toolbar: {
                date: selectedDate,
                openView,
                setOpenView,
              } as ExportedDatePickerToolbarProps,
              popper: {
                className: styles.popper,
              },
            }}
            slots={{
              toolbar: CustomToolbar,
              popper: CustomPopper,
              switchViewButton: () => null,
            }}
          />
        </button>
      </LocalizationProvider>
    </div>
  )
}

export default Datepicker
