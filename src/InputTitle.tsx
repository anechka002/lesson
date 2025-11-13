import React, { useEffect, useState, type ChangeEvent } from 'react'

export const InputTitle = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    document.title = text
  })

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  return (
    <input type="text" onChange={handlerChange} placeholder='lesson'/>
  )
}
