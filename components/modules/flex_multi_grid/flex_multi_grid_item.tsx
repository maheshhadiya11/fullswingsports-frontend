import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import {
  MediaItem,
  Page_Flexiblelayout_PageBuilder_FlexMultiGrid_Tabs_GridItems,
  Page_Flexiblelayout_PageBuilder_FlexMultiGrid_Tabs_GridItems_Media,
} from 'interfaces/types'
import Media from 'components/generic/media/media'
import Button from 'components/generic/button/button'
import WPImage from 'components/generic/wordpress_image/wordpress_image'
import parse from 'html-react-parser'
import { MediaItemInterface } from 'components/generic/media/media.interface'
import styles from './flex_multi_grid.module.scss'

const hasMedia = (media: MediaItemInterface) => {
  return media && ((media.mediaType === 'image' && !!media.image) || (media.mediaType === 'video' && !!media.videoId))
}

const transformPost = (
  item: Page_Flexiblelayout_PageBuilder_FlexMultiGrid_Tabs_GridItems,
  fallbackImage?: MediaItem,
) => {
  // resolve the media item
  let media = hasMedia(item.media)
    ? item.media
    : hasMedia(item.post.postLayout.postHero.media)
    ? (item.post.postLayout.postHero.media as Page_Flexiblelayout_PageBuilder_FlexMultiGrid_Tabs_GridItems_Media)
    : { image: { ...item.post.featuredImage?.node }, mediaType: 'image' }

  //  If there is no media, use the fallback image
  if (!media.image?.mediaItemUrl && fallbackImage) {
    media = { image: fallbackImage, mediaType: 'image' }
  }

  const newPost = {
    headline: item.headline || item.post.title,
    copy: item.copy || item.post?.postLayout?.postHero?.copy || item.post?.excerpt,
    image: null,
    media,
    cta: item.cta || { target: '', title: 'Read More', url: `/blog/${item.post.slug}` },
    post: item.post,
  }
  return newPost
}

export const typename = 'Flexiblelayout_PageBuilder_FlexMultiGrid'

const GridItem: FunctionComponent<{
  item?: Page_Flexiblelayout_PageBuilder_FlexMultiGrid_Tabs_GridItems
  fallbackImage?: MediaItem
  layout: string
  mobileCard?: boolean
}> = ({ item, fallbackImage, layout, mobileCard = true }) => {
  const transformedPost = item?.post ? transformPost(item, fallbackImage) : item
  if (!transformedPost) return null

  const { headline, copy, image, media, cta } = transformedPost
  const hasIcon = image?.mediaItemUrl

  return (
    <div className={cn(styles.gridItem, styles[layout], !hasIcon && mobileCard && styles.cardOnMobile)}>
      {!hasIcon && media && (
        <div className={styles.mediaContainer}>
          <Media
            className={styles.Mediaitem}
            media={media}
          />
        </div>
      )}
      {image?.mediaItemUrl && hasIcon && (
        <WPImage
          className={styles.icon}
          image={image}
        />
      )}
      <div className={cn(styles.gridItemContent)}>
        {headline && <div className={cn(styles.gridItemHeadline)}>{headline}</div>}
        {copy && <div className={cn(styles.gridItemCopy)}>{parse(copy || '')}</div>}
        <Button
          className={cn(styles.gridItemCta)}
          link={cta}
          variant="text"
        />
      </div>
    </div>
  )
}

export default GridItem
