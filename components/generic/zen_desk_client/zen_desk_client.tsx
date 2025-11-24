'use client'

import { useEffect } from 'react'

const ZenDeskClient = () => {
  useEffect(() => {
    const showWidget = () => {
      // @ts-ignore
      window.zE('webWidget', 'show')
      // @ts-ignore
      window.zE('webWidget', 'open')
    }

    const handleBodyClick = (event: MouseEvent) => {
      let target = event.target as HTMLElement | null
      while (target && target !== document.body) {
        if ('href' in target && target.nodeName === 'A' && typeof target.href === 'string') {
          if (target.href.includes('#support')) {
            event.preventDefault()
            showWidget()
            break
          }
        }
        target = target.parentElement
      }
    }
    if (typeof window !== 'undefined' && (window as any).zE) {
      // @ts-ignore
      window.zE('webWidget', 'hide')

      const hideWidgetIconOnClose = () => {
        // @ts-ignore
        window.zE('webWidget:on', 'close', () => {
          // @ts-ignore
          window.zE('webWidget', 'hide')
        })
      }

      document.body.addEventListener('click', handleBodyClick)
      hideWidgetIconOnClose()
    }
    return () => {
      document.body.removeEventListener('click', handleBodyClick)
    }
  }, [])

  return null
}

export default ZenDeskClient
