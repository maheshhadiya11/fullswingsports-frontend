'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import styles from './form.module.scss'
import ContactFormInterface, { FormData } from './form.interface'
import Input from '../input/input'
import Dropdown from '../dropdown/dropdown'
import Button from '../button/button'

const Form = (props: ContactFormInterface) => {
  const { className, onSubmit, countries, intallationTypes, hearFromChoices } = props

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
  })

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    townCity: '',
    textareaContent: '',
    selectedRegion: countries[0],
    selectedInstallation: intallationTypes[0],
    selectedHear: hearFromChoices[0],
  })
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: false }))
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newErrors = {
      firstName: formData.firstName === '',
      lastName: formData.lastName === '',
      email: formData.email === '',
    }

    if (newErrors.firstName || newErrors.lastName || newErrors.email) {
      setErrors(newErrors)
      return
    }
    onSubmit(formData)
  }
  return (
    <form className={cn(styles.root, className)}>
      <Input
        name="firstName"
        error={errors.firstName}
        className={cn(styles.shortInput)}
        label="First Name"
        value={formData.firstName}
        placeholder="Input"
        onChange={handleInputChange}
      />
      <Input
        name="lastName"
        error={errors.lastName}
        className={cn(styles.shortInput)}
        label="Last Name"
        value={formData.lastName}
        placeholder="Input"
        onChange={handleInputChange}
      />
      <Input
        name="email"
        error={errors.email}
        className={cn(styles.shortInput)}
        label="Email"
        value={formData.email}
        placeholder="Input"
        onChange={handleInputChange}
      />
      <Input
        name="phone"
        className={cn(styles.shortInput)}
        label="Phone"
        value={formData.phone}
        placeholder="Input"
        onChange={handleInputChange}
      />
      <Dropdown
        className={cn(styles.countryInput)}
        selectedIndex={countries.indexOf(formData.selectedRegion)}
        setSelectedIndex={(index) => setFormData((prevState) => ({ ...prevState, selectedRegion: countries[index] }))}
        tags={countries}
        label="Country / Region"
      />
      <Input
        name="townCity"
        className={cn(styles.townInput)}
        label="Town / City"
        value={formData.townCity}
        placeholder="Input"
        onChange={handleInputChange}
      />
      <Dropdown
        className={cn(styles.shortDropdown)}
        selectedIndex={intallationTypes.indexOf(formData.selectedInstallation)}
        setSelectedIndex={(index) => setFormData((prevState) => ({ ...prevState, selectedInstallation: intallationTypes[index] }))}
        tags={intallationTypes}
        label="Installation type"
      />

      <Dropdown
        className={cn(styles.shortDropdown)}
        selectedIndex={hearFromChoices.indexOf(formData.selectedHear)}
        setSelectedIndex={(index) => setFormData((prevState) => ({ ...prevState, selectedHear: hearFromChoices[index] }))}
        tags={hearFromChoices}
        label="how did you hear about us?"
      />
      <Input
        variant="textarea"
        name="textareaContent"
        label="textarea"
        value={formData.textareaContent}
        onChange={handleInputChange}
        className={cn(styles.textarea)}
        placeholder="Tell us about your project."
      />
      <div className={cn(styles.buttonContainer)}>
        <Button
          onClick={handleSubmit}
          label="SUBMIT"
        />
      </div>
    </form>
  )
}
export default Form
