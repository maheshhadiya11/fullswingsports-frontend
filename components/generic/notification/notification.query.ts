import gqlTag from 'graphql-tag'
import Link from 'queries/fragments/link'

const NotificaitonQuery = gqlTag`
  ${Link}
  query Notification {
    globalSettings {
      glb {
        showNotification
        notificationLink{
          ...Link
        }
      }
    }
  }
`

export default NotificaitonQuery
