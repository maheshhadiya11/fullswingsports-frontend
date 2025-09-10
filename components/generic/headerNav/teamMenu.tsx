import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { GlobalSettings_Glb_ContactInformationMobile, MediaItem } from 'interfaces/types'
import ArrowRight from 'components/svg/ArrowRight'
import { usePathname } from 'next/navigation'
import styles from './teamMenu.module.scss'
import WPImage from '../wordpress_image/wordpress_image'
import ContactMobile from './contactMobile'

export interface TeamMemberCardProps {
  athlete: {
    athleteId: number
    title: string
    slug: string
    athletesPage: {
      shortDescription: string
      featuredImage: MediaItem
    }
  }
}

const TeamMemberCard = ({ member, onClick }: { member: TeamMemberCardProps; onClick: () => void }) => {
  const pathname = usePathname()

  const isActive = (url: string) => {
    const trim = url.charAt(url.length - 1) === '/' ? url.slice(0, -1) : url
    return pathname === `/athlete/${trim}`
  }

  return (
    <li>
      {member?.athlete.slug && (
        <Link
          href={`/athlete/${member.athlete.slug}`}
          className={cn(styles.member, isActive(member.athlete.slug) && styles.memberActive)}
          onClick={onClick}
        >
          <div className={styles.memberImage}>
            <WPImage
              image={member.athlete.athletesPage.featuredImage}
              className="h-full w-full"
            />
          </div>
          <div className={styles.memberTitle}>{member.athlete.title}</div>
          <div className={styles.memberCopy}>{member.athlete.athletesPage.shortDescription}</div>
        </Link>
      )}
    </li>
  )
}

const TeamMenu = ({
  menu,
  className,
  handleClose,
  mobileContacts,
}: {
  menu: TeamMemberCardProps[]
  className?: string
  mobileContacts: GlobalSettings_Glb_ContactInformationMobile
  handleClose: (full: boolean) => void
}) => {
  if (menu.length < 1) return null

  return (
    <div className={cn(styles.teamMenu, className)}>
      <div className={styles.subBack}>
        <button
          type="button"
          onClick={() => handleClose(false)}
        >
          <ArrowRight />
          Back
        </button>
      </div>
      <div className={styles.menuTrack}>
        <ul>
          {menu.map((member) => (
            <TeamMemberCard
              key={member.athlete.athleteId}
              member={member}
              onClick={() => handleClose(true)}
            />
          ))}
        </ul>
      </div>
      <ContactMobile
        className={cn(styles.teamContact, 'xl:hidden')}
        menu={mobileContacts}
        handleClose={(full) => handleClose(full)}
      />
    </div>
  )
}

export default TeamMenu
