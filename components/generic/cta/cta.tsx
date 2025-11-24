'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import { BundleProduct, SimpleProduct } from 'interfaces/types'
import gql from 'cms/client'
import { useRouter } from 'next/navigation'
import AddProduct from './addToCart.graphql'
import CTAInterface from './cta.interface'
import Button from '../button/button'
import Modal from '../modal/modal'

const CTA = ({ cta, variant, icon, className }: CTAInterface) => {
  const router = useRouter()
  const root = process.env.NEXT_PUBLIC_CMS_URL
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const trimUrl = cta.linkType === 'link' ? cta.link?.url.replace(`${root}`, '') : cta.link?.url
  const getTitle = (product: SimpleProduct | BundleProduct) => {
    if (!product.price) return product.title
    const price = product.price.slice(0, product.price.indexOf('.'))
    return `Add to Cart - ${price}`
  }

  const addToCart = async (event, product: SimpleProduct) => {
    const button = event.currentTarget
    button.disabled = true
    // @ts-ignore
    const cart = await gql(AddProduct, { input: { productId: product.productId } })
    if (cart.data?.addToCart?.cart?.total) {
      router.push(`${root}/cart?session_id=${window.localStorage.getItem('woo-cart-session')}`)
    }
  }

  const isVideo =
    cta && ['link', 'link_ext'].includes(cta.linkType) && cta.link?.url.includes('cdn.jwplayer.com/previews')
  const videoId = isVideo && cta.link.url.replace('https://cdn.jwplayer.com/previews/', '')

  return (
    <>
      {cta &&
        cta.linkType === 'product' &&
        // @ts-ignore
        (cta.linkProduct?.bundlePriceMin ? (
          <Button
            variant={variant}
            label={getTitle(cta.linkProduct as BundleProduct)}
            link={{
              target: '',
              title: '',
              url: `${root}${cta.linkProduct.uri}`,
            }}
            className={cn(className)}
            icon={icon}
          />
        ) : // @ts-ignore
        cta.linkProduct?.price ? (
          <Button
            variant={variant}
            label={getTitle(cta.linkProduct as SimpleProduct)}
            onClick={(e) => addToCart(e, cta.linkProduct as SimpleProduct)}
            className={cn(className)}
            icon={icon}
          />
        ) : null)}
      {cta && ['link', 'link_ext'].includes(cta.linkType) && !isVideo && cta.link?.url && (
        <Button
          variant={variant}
          link={{
            ...cta.link,
            url: trimUrl,
          }}
          className={cn(className)}
          icon={icon}
        />
      )}
      {isVideo && (
        <Button
          variant={variant}
          onClick={() => setVideoModalOpen(true)}
          label={cta.link?.title}
          className={cn(className)}
          icon={icon}
        />
      )}
      {isVideo && videoModalOpen && (
        <Modal
          modal={
            {
              modalType: 'video',
              videoContent: {
                fieldGroupName: '',
                videoId: videoId as string,
              },
            } as any
          }
          closeModal={() => setVideoModalOpen(false)}
        />
      )}
    </>
  )
}

export default CTA
