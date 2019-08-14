import React from "react"
import FormLabel from "./formLabel"
import FormInput from "./formInput"

interface ContactFormProps {
  handleSubmit: React.ChangeEventHandler<HTMLFormElement>
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const ContactForm: React.FC<ContactFormProps> = ({
  handleSubmit,
  handleChange,
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
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <FormLabel htmlFor="name">Your Name</FormLabel>
      <FormInput name="name" placeholder="John Smith" onChange={handleChange} />

      <FormLabel htmlFor="email">Your Email</FormLabel>
      <FormInput
        name="email"
        type="email"
        placeholder="john@example.com"
        onChange={handleChange}
      />

      <FormLabel htmlFor="message">Your Message</FormLabel>
      <textarea
        id="message"
        name="message"
        placeholder="Hello, how are you?"
        className="text-gray-dark block w-full px-2 py-1 mb-4 rounded bg-white border-solid border-2 border-white focus:border-yellow focus:bg-white h-40"
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        className="bg-yellow rounded px-6 py-3 font-semibold mt-3"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
