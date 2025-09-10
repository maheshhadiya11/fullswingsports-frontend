export default interface PaginationInterface {
  selectedIndex: number
  setSelectedIndex: (index: number) => void
  length: number
  className?: string
  itemAriaLabel?: string 
}
