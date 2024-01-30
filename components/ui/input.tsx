import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onTextChange: (value: string) => void
}

export default function Input(props: Props) {
  return (
    <input
      className="input"
      {...props}
      onChange={(e) => props.onTextChange(e.target.value)}
    />
  )
}
