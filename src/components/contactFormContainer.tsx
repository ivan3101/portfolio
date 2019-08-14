import React, { useState } from "react"
import ContactForm from "./contactForm"
import { navigate } from "gatsby-link"

interface ContactData {
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
  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    const input = e.target

    setContactData({
      ...contactData,
      [input.name]: input.value,
    })
  }

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    const form = e.target

    const requestBody = {
      "form-name": form.getAttribute("name") || "",
      ...contactData,
    }

    alert(requestBody)

    const encodedRequestBody = encode(requestBody)

    fetch("/", {
      method: "POST",
      headers: { "Contect-Type": "application/x-www-form-urlencoded " },
      body: encodedRequestBody,
    })
      .then(() => navigate(form.getAttribute("action")!))
      .catch(error => alert(error))
  }

  return <ContactForm handleSubmit={handleSubmit} handleChange={handleChange} />
}

export default ContactFormContainer
