import React from "react"
import FormLabel from "./formLabel"
import FormInput from "./formInput"
import { ContactData } from "./contactFormContainer"
import SubmitButton from "./submitButton"
import TextArea from "./textArea"
import FormGroup from "./formGroup"
import Tooltip, { TooltipBackground } from "./tooltip"
import SuccessMessage from "./successMessage"

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
      <SuccessMessage show={success}>
        <p className="font-semibold mb-2">
          Thank you! Your message was sent successfully
        </p>

        <p>
          I appreciate you liked my jobs and want to contact with me. I&apos;ll
          contact you as soon as I read this message.
        </p>
      </SuccessMessage>

      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <FormGroup>
        <FormLabel htmlFor="name">Your Name</FormLabel>

        <Tooltip
          show={onFocus === "name" && !!errors.name}
          block={true}
          message={errors.name}
          background={TooltipBackground.Red}
        >
          <FormInput
            name="name"
            required
            placeholder="John Smith"
            onChange={handleChange}
            value={values.name}
            error={!!errors.name}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </Tooltip>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="email">Your Email</FormLabel>
        <Tooltip
          show={onFocus === "email" && !!errors.email}
          block={true}
          message={errors.email}
          background={TooltipBackground.Red}
        >
          <FormInput
            name="email"
            type="email"
            placeholder="john@example.com"
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={values.email || ""}
            error={!!errors.email}
            required
          />
        </Tooltip>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="message">Your Message</FormLabel>
        <Tooltip
          show={onFocus === "message" && !!errors.message}
          block={true}
          message={errors.message}
          background={TooltipBackground.Red}
        >
          <TextArea
            id="message"
            name="message"
            placeholder="Hello, how are you?"
            onChange={handleChange}
            value={values.message}
            error={!!errors.message}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            required
          ></TextArea>
        </Tooltip>
      </FormGroup>

      <SubmitButton disabled={disable}>Send Message</SubmitButton>
    </form>
  )
}

export default ContactForm
