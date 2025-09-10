'use client'

import { useEffect } from 'react'
import LogInterface from './log.interface'

const Log = (props: LogInterface) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return
    // eslint-disable-next-line no-console
    console.log(props)
  }, [props])
  return null
}

export default Log
