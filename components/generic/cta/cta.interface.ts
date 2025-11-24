import { AcfLink, ContentNode } from 'interfaces/types'
import { IconOption } from '../icon/icon'

export default interface CTAInterface {
  variant?: 'primary' | 'secondary' | 'text' | undefined
  cta: {
    linkType: 'link' | 'link_ext' | 'product' | string
    link: AcfLink
    linkProduct?: ContentNode
  }
  icon?: IconOption
  className?: string
}
