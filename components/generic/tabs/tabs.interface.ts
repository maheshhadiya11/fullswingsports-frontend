import { AcfLink } from 'interfaces/types'

export default interface TabsInterface {
  cta: AcfLink
  selectedIndex: number
  onTabClick: (index: number) => void
  tabs: {
    headline: string
  }[]
}
