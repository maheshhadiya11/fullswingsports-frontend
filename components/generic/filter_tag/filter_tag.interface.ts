export default interface FilterTagInterface {
  label: string
  className?: string
  disabled?: boolean
  onClick?: () => void
  selected?: boolean
}
