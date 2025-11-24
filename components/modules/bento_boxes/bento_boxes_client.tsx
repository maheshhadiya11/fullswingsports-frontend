'use client'

import React, { FunctionComponent, useState } from 'react'
import cn from 'classnames'
import { Page_Flexiblelayout_PageBuilder_BentoBoxes_Boxes } from 'interfaces/types'
import { useIsMobile } from 'utils/useIsMobile'
import Modal from 'components/generic/modal/modal'
import styles from './bento_boxes.module.scss'
import BentoBox from './bento_box'

export const typename = 'Flexiblelayout_PageBuilder_BentoBoxes'

const BentoBoxesClient: FunctionComponent<{
  boxes: Page_Flexiblelayout_PageBuilder_BentoBoxes_Boxes[]
  configuration: string
}> = ({ boxes, configuration }) => {
  const mobile = useIsMobile('md')
  const half = ['three-01', 'three-02', 'three-06'].includes(configuration) ? 1 : Math.ceil(boxes.length / 2)

  const cols = !['one-01', 'two-01', 'three-07', 'three-08'].includes(configuration)

  const [modalOpen, setModalOpen] = useState<number>(-1)

  const handleOpenModal = (idx: number) => {
    document.documentElement.classList.add('pointer-events-none')
    document.documentElement.classList.add('overflow-hidden')
    setModalOpen(idx)
  }

  const handleCloseModal = () => {
    document.documentElement.classList.remove('overflow-hidden')
    setModalOpen(-1)

    setTimeout(() => {
      document.documentElement.classList.remove('pointer-events-none')
    }, 300)
  }

  return (
    boxes?.length && (
      <>
        <div
          className={cn(styles.boxGrid, cols ? styles.boxCols : styles.boxRaw, configuration && styles[configuration])}
        >
          {mobile || !cols ? (
            boxes.map((box, idx) => (
              <BentoBox
                key={idx}
                box={box}
                openBoxModal={() => handleOpenModal(idx)}
                className={styles[`box-${idx}`]}
              />
            ))
          ) : (
            <>
              <div className={styles.boxColumn}>
                {boxes.slice(0, half).map((box, idx) => (
                  <BentoBox
                    key={idx}
                    box={box}
                    className={styles[`box-${idx}`]}
                    openBoxModal={() => handleOpenModal(idx)}
                  />
                ))}
              </div>
              <div className={styles.boxColumn}>
                {boxes.slice(half).map((box, idx) => (
                  <BentoBox
                    key={half + idx}
                    box={box}
                    className={styles[`box-${half + idx}`]}
                    openBoxModal={() => handleOpenModal(half + idx)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        {boxes?.[modalOpen]?.modal && (
          <Modal
            modal={boxes[modalOpen].modal}
            closeModal={() => handleCloseModal()}
          />
        )}
      </>
    )
  )
}

export default BentoBoxesClient
