'use client'

import React, { FunctionComponent, useEffect, useRef } from 'react'
import cn from 'classnames'
import parse from 'html-react-parser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { theme } from 'tailwind.config'
import { useIsMobile } from 'utils/useIsMobile'

import styles from './intro_quoter.module.scss'

gsap.registerPlugin(ScrollTrigger)

const options = {
  replace: (domNode) => {
    if (domNode.type === 'tag' && domNode.name === 'br') {
      return <br />
    }
    return undefined
  },
}

interface IntroQuoterInterface {
  quote: string
  subline: string
  highlightonscroll: boolean
  layout: 'full' | 'compact' | string
  isquoted: boolean
}

const IntroQuoterClient: FunctionComponent<IntroQuoterInterface> = ({
  quote,
  subline,
  highlightonscroll,
  layout,
  isquoted,
}) => {
  const quoteRef = useRef<HTMLHeadingElement>(null)
  const isMobile = useIsMobile()

  const wrapLettersInSpan = (text: string) => {
    return text
      .split('')
      .map((letter, index) => `<span key="${index}" class="letter">${letter}</span>`)
      .join('')
  }

  const convertedSubline = subline && parse(subline.replace(/\r?\n/g, '<br />') || '', options)

  useEffect(() => {
    if (!quoteRef.current) return undefined

    const light =
      quoteRef.current.parentElement?.parentElement?.parentElement?.parentElement?.classList.contains('background-wrap')
    const letters = quoteRef.current.querySelectorAll('.letter')
    const offset = isMobile ? 30 : 200

    // Create the GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: quoteRef.current,
        start: `top-=${offset * 3} center`,
        end: `bottom-=${offset} center`,
        scrub: 2,
        markers: false,
      },
    })

    letters.forEach((letter) => {
      timeline.to(letter, {
        color: theme.colors.fsGrey[light ? 50 : 950],
        duration: 1,
      })
    })

    return () => {
      timeline.kill()
    }
  }, [isMobile])

  return (
    <div className={cn(styles.root, 'container', layout && styles[layout])}>
      <div className="default-grid">
        {quote && (
          <h2
            className={cn(styles.quote, highlightonscroll ? styles.quoteHighlight : styles.quoteStatic)}
            ref={quoteRef}
          >
            {isquoted && <div className={cn(styles.icon, 'letter')}>“</div>}
            {highlightonscroll ? parse(wrapLettersInSpan(quote) || '') : quote}
            {isquoted && <span className="letter">”</span>}
          </h2>
        )}
        {(subline || isquoted) && <span className={styles.subline}>{convertedSubline}</span>}
      </div>
    </div>
  )
}

export default IntroQuoterClient
