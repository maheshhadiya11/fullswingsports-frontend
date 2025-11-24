import React from 'react'
import cn from 'classnames'
import gql from 'cms/client'
import { GlobalSettings } from 'interfaces/types'
import styles from './notification.module.scss'
import Button from '../button/button'
import NotificaitonQuery from './notification.query'

const getNotification = async () => {
  return (await gql(NotificaitonQuery)).data.globalSettings
}

const Notification = async () => {
  const notificationData: GlobalSettings = await getNotification()
  if (!notificationData || !notificationData.glb.showNotification) return null
  return (
    <div className={cn(styles.root, 'container')}>
      <Button
        className={cn(styles.button)}
        variant="text"
        link={notificationData.glb.notificationLink}
      />
    </div>
  )
}

export default Notification
