export default interface FilterInterface {
  className?: string
  tags: string[]
  onChange?: (index: number) => void
  label?: string
  dropdownMenuClassName?: string
}
