import React from 'react'
import dynamic from 'next/dynamic'

const Gift = dynamic(() => import('components/svg/Gift'), { ssr: false })
const Plus = dynamic(() => import('components/svg/Plus'), { ssr: false })
const X = dynamic(() => import('components/svg/X'), { ssr: false })
const SupportIcon = dynamic(() => import('components/svg/supportIcon'), { ssr: false })
const ChatIcon = dynamic(() => import('components/svg/chatIcon'), { ssr: false })
const Phone = dynamic(() => import('components/svg/Phone'), { ssr: false })
const Shop = dynamic(() => import('components/svg/Shop'), { ssr: false })
const Purchase = dynamic(() => import('components/svg/Purchase'), { ssr: false })
const Ticket = dynamic(() => import('components/svg/Ticket'), { ssr: false })
const Message = dynamic(() => import('components/svg/Message'), { ssr: false })

export type IconOption =
  | 'gift'
  | 'plus'
  | 'close'
  | 'phone'
  | 'support'
  | 'headphones'
  | 'chat'
  | 'shop'
  | 'purchase'
  | 'message'
  | 'none'
  | undefined

const Icon = ({ icon }: { icon: IconOption }) => {
  switch (icon) {
    case 'close':
      return <X />
    case 'gift':
      return <Gift />
    case 'plus':
      return <Plus />
    case 'support':
      return <Ticket />
    case 'headphones':
      return <SupportIcon />
    case 'phone':
      return <Phone />
    case 'chat':
      return <ChatIcon />
    case 'purchase':
      return <Purchase />
    case 'shop':
      return <Shop />
    case 'message':
      return <Message />
    default:
      return null
  }
}

export default Icon
