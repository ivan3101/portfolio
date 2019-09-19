import { createContext } from "react"

export interface LocaleContext {
  default?: boolean
  path: string
  siteLanguage: string
  title: string
  description: string
}

const localeContext = createContext<LocaleContext>({
  path: "",
  siteLanguage: "",
  title: "",
  description: "",
})

export default localeContext
