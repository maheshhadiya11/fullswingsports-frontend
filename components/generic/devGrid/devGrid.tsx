'use client'

import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

const DevGrid = () => {
  const currentGridSetting = useRef(process.env.NODE_ENV === 'development')
  const [showGrid, setShowGrid] = useState(process.env.NODE_ENV === 'development')
  useEffect(() => {
    const onKey = (event) => {
      if (event.ctrlKey && event.key === 'g') {
        setShowGrid(!currentGridSetting.current)
        currentGridSetting.current = !currentGridSetting.current
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  if (!showGrid) return null

  return (
    <div className="devGrid w-full container">
      <div className="default-grid h-screen">
        {Array(12)
          .fill({})
          .map((_, index) => (
            <div
              className={cn('col col-span-1', {
                hidden: index >= 4,
                'md:block': index < 8 && index >= 4,
                'lg:block': index >= 8,
              })}
              key={new Date().getTime() + Math.random()}
            />
          ))}
      </div>
    </div>
  )
}

export default DevGrid
