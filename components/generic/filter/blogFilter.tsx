'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import cn from 'classnames'
import { useIsMobile } from 'utils/useIsMobile'
import styles from './filter.module.scss'
import FilterInterface from './filter.interface'
import Filter from './filter'

const BlogFilter = (props: FilterInterface) => {
  const { tags } = props
  const router = useRouter()

  const extendTags = ['Featured Content'].concat(tags)

  const isMobile = useIsMobile('xl')
  const belowDesktop = useIsMobile('xxl')

  const onChange = (idx: number) => {
    const query = idx > 0 ? `${extendTags[idx]}` : ''
    router.push(`/blog?category=${query}&limit=${belowDesktop ? 6 : 8}`, { scroll: false })
  }

  return (
    <div className={cn('container', styles.blogFilter)}>
      <Filter
        label={isMobile ? 'Filter results' : ''}
        tags={extendTags}
        onChange={onChange}
        className={styles.blogFilterBar}
      />
    </div>
  )
}

export default BlogFilter
