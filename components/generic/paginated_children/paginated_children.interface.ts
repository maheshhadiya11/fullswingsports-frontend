import { GlobalSettings_Glb_FeaturedPosts } from 'interfaces/types'
import { HTMLAttributes } from 'react'

export default interface PaginatedChildrenInterface extends HTMLAttributes<HTMLDivElement> {
  initialChildren?: number
  stepSize?: number
  isLastPage?: boolean
  featuredPosts: GlobalSettings_Glb_FeaturedPosts[]
}
