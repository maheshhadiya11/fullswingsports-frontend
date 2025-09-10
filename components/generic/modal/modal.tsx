import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import {
  Page_Flexiblelayout_PageBuilder_BentoBoxes_Boxes_Modal,
  Page_Flexiblelayout_PageBuilder_ContactForm,
  Page_Flexiblelayout_PageBuilder_GallerySlideshow,
} from 'interfaces/types'
import { Portal } from 'react-portal'
import TtacModule from 'components/modules/ttac/ttac'
import GallerySlideshowModule from 'components/modules/gallery_slideshow/gallery_slideshow'
import ContactFormModule from 'components/modules/contact_form/contact_form'
import styles from './modal.module.scss'
import Button from '../button/button'
import JwPlayer from '../jw_player/jw_player'

interface ModalProps {
  modal: Page_Flexiblelayout_PageBuilder_BentoBoxes_Boxes_Modal
  closeModal: () => void
}

const Modal: FunctionComponent<ModalProps> = ({ modal, closeModal }) => {
  const { modalType, ttacContent, videoContent, galleryContent, contactContent } = modal

  const galleryModal = {
    ...galleryContent,
    layout: 'full',
    spacing: 'none',
  } as Page_Flexiblelayout_PageBuilder_GallerySlideshow

  return (
    <Portal>
      <div className={cn(styles.root, (modalType === 'video' || modalType === 'gallery') && styles.overlay)}>
        <Button
          className={styles.closeBtn}
          variant="icon"
          icon="close"
          label="Close modal"
          onClick={() => closeModal()}
        />
        <div className={styles.content}>
          {modalType === 'ttac' && ttacContent && <TtacModule module={ttacContent} />}
          {modalType === 'video' && videoContent && (
            <div className={styles.videoWrapper}>
              <JwPlayer
                key={modal.videoContent.videoId}
                className={styles.video}
                videoId={modal.videoContent.videoId}
              />
            </div>
          )}
          {modalType === 'form' && (
            <ContactFormModule module={contactContent as Page_Flexiblelayout_PageBuilder_ContactForm} />
          )}
          {modalType === 'gallery' && galleryContent && (
            <div className={cn(styles.galleryWrapper, 'dark-ui')}>
              <GallerySlideshowModule module={galleryModal} />
            </div>
          )}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
