'use client'

import React, { useEffect } from 'react'
import cn from 'classnames'
import styles from './jw_player.module.scss'
import JwPlayerInterface from './jw_player.interface'

const JwPlayer = (props: JwPlayerInterface) => {
  const { videoId, className } = props

  const ids = videoId.split('-')
  if (!videoId) return null

  useEffect(() => {
    const script = document.createElement('script')

    if (ids.length > 1) {
      script.src = `https://cdn.jwplayer.com/players/${videoId}.js`
    } else {
      script.src = `https://cdn.jwplayer.com/players/${videoId}-ZoyXWRpS.js`
    }
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [videoId])

  return (
    <div className={cn(styles.root, className)}>
      {ids.length > 1 ? <div id={`botr_${ids[0]}_${ids[1]}_div`} /> : <div id={`botr_${videoId}_ZoyXWRpS_div`} />}
    </div>
  )
}

export default JwPlayer
