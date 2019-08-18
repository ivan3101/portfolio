import { FormEvent, useState, useEffect, useCallback } from "react"

export interface Callback<T> {
  (state: T, event: FormEvent<HTMLFormElement>, resetForm: () => void): void
}

export interface ValidationSchema {
  [key: string]: {
    required: boolean
    requiredMessage: string
    validator: {
      regEx: RegExp
      error: string
    }
  }
}

function useForm<T extends Record<string, string>>(
  stateSchema: T,
  validationSchema: ValidationSchema = {},
  callback: Callback<T>
) {
  const [state, setState] = useState<T>(stateSchema)
  const [disable, setDisable] = useState(true)
  const [isDirty, setIsDirty] = useState(false)
  const [errors, setErrors] = useState<T>(stateSchema)

  useEffect(() => {
    setDisable(true)
  }, [])

  const validateState = useCallback(() => {
    const keys: string[] = Object.keys(validationSchema)
    const hasErrorInState: boolean = keys.some((key: string) => {
      const isInputFieldRequired = validationSchema[key].required
      const stateValue = state[key]
      const stateError = errors[key]

      return (isInputFieldRequired && !stateValue) || stateError
    })

    return hasErrorInState
  }, [state, validationSchema, errors])

  useEffect(() => {
    if (isDirty) {
      setDisable(validateState())
    }
  }, [state, isDirty, validateState])

  const handleOnChange = useCallback(
    event => {
      setIsDirty(true)

      const name = event.target.name
      const value = event.target.value

      let error = ""
      if (validationSchema[name].required) {
        if (!value) {
          error = validationSchema[name].requiredMessage
        }
      }

      if (
        validationSchema[name].validator !== null &&
        typeof validationSchema[name].validator === "object"
      ) {
        if (value && !validationSchema[name].validator.regEx.test(value)) {
          error = validationSchema[name].validator.error
        }
      }

      setState(prevState => ({
        ...prevState,
        [name]: value,
      }))

      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error,
      }))
    },
    [validationSchema]
  )

  const resetForm = () => {
    setState(stateSchema)
  }

  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault()

      // Make sure that validateState returns false
      // Before calling the submit callback function
      if (!validateState()) {
        callback(state, event, resetForm)
      }
    },
    [state, callback, validateState]
  )

  return { state, errors, disable, handleOnChange, handleOnSubmit }
}

export default useForm
