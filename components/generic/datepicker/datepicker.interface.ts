export default interface DatepickerInterface {
  className?: string
  label?: string
  placeholder?: string
  onChange: (date: Date) => void
}
