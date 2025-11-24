import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_BentoBoxes_Boxes } from 'interfaces/types'
import Button from 'components/generic/button/button'
import Media from 'components/generic/media/media'
import Icon, { IconOption } from 'components/generic/icon/icon'
import styles from './bento_boxes.module.scss'

export const typename = 'Flexiblelayout_PageBuilder_BentoBoxes'

interface BentoBoxProps {
  box: Page_Flexiblelayout_PageBuilder_BentoBoxes_Boxes
  className?: string | undefined
  openBoxModal: () => void
}

const BentoBox: FunctionComponent<BentoBoxProps> = ({ box, className, openBoxModal }) => {
  const { icon, headline, media, copy, cta, backdrop, openModal } = box

  const hasLink = cta?.url

  return (
    <div
      className={cn(
        styles.boxRoot,
        className,
        (!backdrop || !media) && styles.noGradient,
        (hasLink || openModal) && styles.hover,
      )}
    >
      <div className={styles.bg}>{media && <Media media={media} />}</div>
      <div className={styles.gradient} />
      <div className={styles.fg}>
        {icon && <Icon icon={icon as IconOption} />}
        {headline && <h3 className={cn(styles.headline)}>{headline}</h3>}
        {copy && <p className={cn(styles.copy)}>{copy}</p>}
        {cta && (
          <Button
            link={cta}
            layout="small"
            variant="secondary"
            className={cn(hasLink && styles.hasLink, 'mt-24')}
          />
        )}
      </div>
      {openModal && (
        <div className={styles.buttonContainer}>
          <Button
            className={cn(
              !hasLink && openModal && styles.modalButton,
              openModal && !hasLink && styles.hasModalOnly,
              styles.modalCta,
            )}
            variant="icon"
            label="Open modal"
            layout="small"
            icon="plus"
            onClick={openBoxModal}
          />
        </div>
      )}
    </div>
  )
}

export default BentoBox
