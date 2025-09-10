/* global affirm */

'use client'

import React, { useEffect } from 'react'
import { BundleProduct, ContentNode, SimpleProduct } from 'interfaces/types'
import styles from './hero.module.scss'

interface HeroAffirmProps {
  product: ContentNode | BundleProduct | SimpleProduct
}

const hasPrice = (item: any) => {
  return item.price || item.bundlePriceMin
}

const unwrapPrice = (item: any) => {
  const price = item?.bundlePriceMin
    ? item.bundlePriceMin
    : item?.price?.slice(0, item.price.indexOf('.')).replace(/\$/g, '').replace(/,/g, '')
  return Number(price) * 100
}

const HeroAffirm = ({ product }: HeroAffirmProps) => {
  useEffect(() => {
    // @ts-ignore
    if (typeof affirm !== 'undefined') {
      // @ts-ignore
      affirm.ui.ready(() => {
        // @ts-ignore
        affirm.ui.refresh()
      })
    }
  }, [])

  return (
    hasPrice(product) && (
      <div className={styles.paymentInformation}>
        <p
          className="affirm-as-low-as"
          data-amount={unwrapPrice(product)}
          data-affirm-color="white"
          data-page-type="payment"
        />
      </div>
    )
  )
}

export default HeroAffirm
