export type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  townCity: string
  textareaContent: string
  selectedRegion: string
  selectedInstallation: string
  selectedHear: string
}
export default interface ContactFormInterface {
  className?: string
  onSubmit: (data: FormData) => void
  countries: string[]
  intallationTypes: string[]
  hearFromChoices: string[]
}
