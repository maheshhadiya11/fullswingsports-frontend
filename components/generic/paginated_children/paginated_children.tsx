'use client'

import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { useSearchParams, useRouter } from 'next/navigation'
import FlexMultiGridClient from 'components/modules/flex_multi_grid/flex_multi_grid_client'
import { useIsMobile } from 'utils/useIsMobile'
import styles from './paginated_children.module.scss'
import PaginatedChildrenInterface from './paginated_children.interface'
import Button from '../button/button'

const PaginatedChildren = (props: PaginatedChildrenInterface) => {
  const { featuredPosts, isLastPage, children } = props

  const params = useSearchParams()
  const router = useRouter()

  const featuredPostsData: any = {
    spacing: 'small',
    headline: '',
    cta: {
      title: '',
      url: '/',
      target: '',
    },
    layout: 'two-up',
    layoutMode: 'fullWidth',
    tabs: [
      {
        gridItems: featuredPosts[0].post.map((post) => ({ post })),
      },
    ],
  }

  const stepSize = useIsMobile('xxl') ? 6 : 8

  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  const [currentLimit, setCurrentLimit] = useState(6)

  const handleLoadMore = () => {
    router.push(`/blog?category=${currentCategory}&limit=${currentLimit + stepSize}`, { scroll: false })
  }

  useEffect(() => {
    const limit = params.get('limit')
    const category = params.get('category')

    if (limit) {
      setCurrentLimit(parseInt(limit, 10))
    } else {
      setCurrentLimit(stepSize)
    }

    setCurrentCategory(category)
  }, [params])

  // @ts-ignore
  const displayLength = children && children.length && Math.max(1, Math.floor(children.length / stepSize)) * stepSize

  return (
    <>
      {!currentCategory && (
        <FlexMultiGridClient
          isBlogLanding
          module={featuredPostsData}
        />
      )}
      <div className={cn(styles.root, 'container')}>
        <div className="default-grid md:grid-cols-12">
          {/* @ts-ignore */}
          {displayLength > 0 && children.slice(0, displayLength)}
          {!isLastPage && (
            <div className="col-span-full">
              <Button
                onClick={() => handleLoadMore()}
                className={styles.loadMoreButton}
                label="Load More"
                variant="secondary"
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PaginatedChildren
