export default interface DropdownInterface {
  tags: string[]
  setSelectedIndex: (index: number) => void
  selectedIndex: number
  label?: string
  className?: string
  menuClassName?: string
}
