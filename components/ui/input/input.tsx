import { InputError } from '@/app/(auth)/dashboard/use-handler-error'
import React from 'react'
import { SupportingText } from './supporting-text'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: InputError
  supportingText?: string
  onTextChange: (value: string) => void
}

export default function Input({
  error,
  supportingText,
  onTextChange,
  ...inputProps
}: InputProps) {
  function showSupportingTextIfNeed() {
    if (error) {
      return (
        <SupportingText theme="destructive">{error.message}</SupportingText>
      )
    }

    if (supportingText) {
      return <SupportingText>{supportingText}</SupportingText>
    }
  }

  function showInput() {
    if (error) {
      return (
        <input
          {...inputProps}
          className="input destructive-input"
          onChange={(e) => onTextChange(e.target.value)}
        />
      )
    } else {
      return (
        <input
          {...inputProps}
          className="input"
          onChange={(e) => onTextChange(e.target.value)}
        />
      )
    }
  }

  return (
    <div className="flex flex-col justify-start gap-y-1">
      {showInput()}
      {showSupportingTextIfNeed()}
    </div>
  )
}
