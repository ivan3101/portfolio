import { useCallback, useState, FormEvent } from "react"

const useFocus = () => {
  const [onFocus, setOnFocus] = useState("")

  const onHandleFocus = useCallback(
    (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const field = event.target as HTMLInputElement | HTMLTextAreaElement

      setOnFocus(field.name)
    },
    []
  )

  const onHandleBlur = useCallback((): void => {
    setOnFocus("")
  }, [])

  return [
    onFocus,
    {
      onHandleFocus,
      onHandleBlur,
    },
  ] as const
}

export default useFocus
