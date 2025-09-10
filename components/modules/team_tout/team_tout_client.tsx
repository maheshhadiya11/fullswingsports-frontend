'use client'

import React, { FunctionComponent, useState, MouseEvent } from 'react'
import cn from 'classnames'
import { Athlete, GlobalSettings_Glb_TeamMembers } from 'interfaces/types'
import WPImage from 'components/generic/wordpress_image/wordpress_image'
import Popover from '@mui/material/Popover'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from './team_tout.module.scss'

const Chevron = dynamic(() => import('components/svg/chevronDown'))
const XMark = dynamic(() => import('components/svg/X'))

const TeamToutClient: FunctionComponent<{ currentAthlete: Athlete; team: GlobalSettings_Glb_TeamMembers[] }> = ({
  team,
  currentAthlete,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const onEntered = (e: HTMLDivElement) => {
    const links = e.querySelectorAll<'a'>('a')
    const idx = Array.from(links).findIndex((link) => link.href.includes(currentAthlete.slug))
    if (idx > -1) {
      links[idx].scrollIntoView()
    }
  }

  return (
    <div className={cn(styles.root)}>
      <button
        type="button"
        className={styles.modalButton}
        onClick={handleClick}
      >
        <WPImage
          className={cn(styles.image)}
          image={currentAthlete.athletesPage.featuredImage}
        />
        <div className={cn(styles.titleContainer)}>
          <h5 className={cn(styles.teamName)}>team fullswing</h5>
          <h5 className={cn(styles.name)}>{currentAthlete.title}</h5>
        </div>
        <Chevron className={cn(styles.icon, anchorEl && 'rotate-180')} />
      </button>
      <Popover
        classes={{ paper: cn(styles.popover) }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: -13,
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        TransitionProps={{
          onEntered,
        }}
      >
        <div className={cn(styles.popoverTitleContainer)}>
          <span className={cn(styles.teamName)}>Team Fullswing</span>
          <button
            type="button"
            onClick={() => setAnchorEl(null)}
          >
            <XMark />
          </button>
        </div>
        <div className={cn(styles.listOverlay)}>
          <div className={cn(styles.athletesList)}>
            {team.map((member, index) => (
              <Link
                href={`/athlete/${member.athlete.slug}`}
                key={`${member.athlete.title}-${index}`}
                className={cn(styles.listItem)}
              >
                <div className={cn(member.athlete.slug === currentAthlete.slug && styles.currentAthlete)}>
                  <WPImage
                    className={cn(styles.image)}
                    image={member.athlete.athletesPage.featuredImage}
                  />
                </div>
                <div className={cn(styles.titleContainer)}>
                  <span className={cn(styles.name)}>{member.athlete.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Popover>
    </div>
  )
}

export default TeamToutClient
