import React from "react"
import FormLabel from "./formLabel"
import FormInput from "./formInput"
import { ContactData } from "./contactFormContainer"
import SubmitButton from "./submitButton"
import TextArea from "./textArea"
import FormGroup from "./formGroup"
import Tooltip, { TooltipBackground } from "./tooltip"
import SuccessMessage from "./successMessage"
import useTranslation from "../hooks/useTranslation"

interface ContactFormProps {
  handleSubmit: React.ChangeEventHandler<HTMLFormElement>
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  values: ContactData
  disable: boolean
  errors: ContactData
  handleOnFocus: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  handleOnBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onFocus: string
  success: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({
  handleSubmit,
  handleChange,
  values,
  disable,
  errors,
  handleOnFocus,
  handleOnBlur,
  onFocus,
  success,
}) => {
  const { contact } = useTranslation()

  const { name, email, message } = contact
  return (
    <form
      className="my-10 mx-auto max-w-md text-right"
      data-netlify="true"
      name="contact"
      action="#"
      method="post"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <FormGroup>
        <FormLabel htmlFor="name">{name.label}</FormLabel>

        <Tooltip
          show={onFocus === "name" && !!errors.name}
          block={true}
          message={errors.name}
          background={TooltipBackground.Red}
          id="nameTooltip"
        >
          <FormInput
            name="name"
            id="name"
            required
            placeholder={name.placeholder}
            onChange={handleChange}
            value={values.name}
            error={!!errors.name}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            aria-describedby="nameTooltip"
          />
        </Tooltip>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="email">{email.label}</FormLabel>
        <Tooltip
          show={onFocus === "email" && !!errors.email}
          block={true}
          message={errors.email}
          background={TooltipBackground.Red}
          id="emailTooltip"
        >
          <FormInput
            name="email"
            id="email"
            type="email"
            placeholder={email.placeholder}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={values.email || ""}
            error={!!errors.email}
            aria-describedby="emailTooltip"
            required
          />
        </Tooltip>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="message">{message.label}</FormLabel>
        <Tooltip
          show={onFocus === "message" && !!errors.message}
          block={true}
          message={errors.message}
          background={TooltipBackground.Red}
          id="messageTooltip"
        >
          <TextArea
            aria-describedby="messageTooltip"
            id="message"
            name="message"
            placeholder={message.placeholder}
            onChange={handleChange}
            value={values.message}
            error={!!errors.message}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            required
          ></TextArea>
        </Tooltip>
      </FormGroup>

      <SuccessMessage show={success}>
        <p className="font-semibold mb-2">{contact.success.title}</p>

        <p>{contact.success.message}</p>
      </SuccessMessage>

      <SubmitButton disabled={disable}>{contact.submit}</SubmitButton>
    </form>
  )
}

export default ContactForm
