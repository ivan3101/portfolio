import React, { useState } from "react"
import ContactForm from "./contactForm"
import useForm, { ValidationSchema } from "../hooks/useForm"
import useFocus from "../hooks/useFocus"
import useTranslation from "../hooks/useTranslation"

export interface ContactData {
  [index: string]: string
  name: string
  email: string
  message: string
}

interface EncodeData extends ContactData {
  "form-name": string
}

const encode = (data: EncodeData) => {
  const fields = Object.keys(data)

  return fields
    .map(field => {
      const encodedFieldName = encodeURIComponent(field)
      const fieldValue = data[field]
      const encodedFieldValue = encodeURIComponent(fieldValue)

      return encodedFieldName + "=" + encodedFieldValue
    })
    .join("&")
}

const ContactFormContainer = () => {
  const { contact } = useTranslation()
  const { name, email, message } = contact

  const [success, setSuccess] = useState(false)

  const sendMessage = (
    contactData: ContactData,
    event: React.FormEvent<HTMLFormElement>,
    resetForm: () => void
  ) => {
    const form = event.target as HTMLFormElement

    const requestBody = {
      "form-name": form.getAttribute("name") || "",
      ...contactData,
    }

    const encodedRequestBody = encode(requestBody)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedRequestBody,
    })
      .then(() => {
        resetForm()
        setSuccess(true)
      })
      .catch(error => alert(error))
  }

  const contactDataSchema: ContactData = {
    name: "",
    email: "",
    message: "",
  }

  const validationSchema: ValidationSchema = {
    name: {
      required: true,
      requiredMessage: name.error.required,
      validator: {
        regEx: /^[a-zA-Z\s]+$/,
        error: name.error.wrongInput,
      },
    },
    email: {
      required: true,
      requiredMessage: email.error.required,
      validator: {
        regEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: email.error.wrongInput,
      },
    },
    message: {
      required: true,
      requiredMessage: message.error.required,
      validator: {
        regEx: /^[a-zA-Z'",.@#!?\d\s]+$/,
        error: message.error.wrongInput,
      },
    },
  }

  const {
    state: contactData,
    errors,
    disable,
    handleOnChange,
    handleOnSubmit,
  } = useForm(contactDataSchema, validationSchema, sendMessage)

  const [onFocus, eventHandlers] = useFocus()

  return (
    <ContactForm
      handleSubmit={handleOnSubmit}
      handleChange={handleOnChange}
      values={contactData}
      errors={errors}
      disable={disable}
      onFocus={onFocus}
      handleOnFocus={eventHandlers.onHandleFocus}
      handleOnBlur={eventHandlers.onHandleBlur}
      success={success}
    />
  )
}

export default ContactFormContainer
