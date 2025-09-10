import React from 'react'
import Link from 'next/link'
import parse from 'html-react-parser'
import Icon, { IconOption } from '../icon/icon'
import styles from './promo_blocks.module.scss'
import { PromoBlocksInterface } from './promo_blocks.interface'

const PromoBlocks = ({ blocks }: PromoBlocksInterface) => {
  return (
    <div className={styles.root}>
      {blocks.map((block) => {
        const ContainerType = block?.link?.url ? Link : 'div'
        return (
          <ContainerType
            href={block?.link?.url}
            className={styles.block}
          >
            <Icon icon={block.icon as IconOption} />
            <h3 className="card-title mt-16">{block.headline}</h3>
            <h4 className="body-copy-2 mt-16">{parse(block.copy || '')}</h4>
          </ContainerType>
        )
      })}
    </div>
  )
}

export default PromoBlocks
