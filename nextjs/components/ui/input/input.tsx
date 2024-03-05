'use client'
import React from 'react'
import InputMask from 'react-input-mask'
import { SupportingText } from './supporting-text'
import { InputError } from '@/scenes/dashboard/auth/use-handler-error'
import unmask, { masks } from './masks'

type Masks = typeof masks

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: keyof Masks
  error?: InputError
  supportingText?: string
  onTextChange: (value: string) => void
}

export default function Input({ error, supportingText, onTextChange, mask = 'none', ...inputProps }: InputProps) {
  // MARK: - View updates methods

  function showSupportingTextIfNeed() {
    if (error) {
      return <SupportingText theme="destructive">{error.message}</SupportingText>
    }

    if (supportingText) {
      return <SupportingText>{supportingText}</SupportingText>
    }
  }

  function showInput() {
    if (error) {
      return (
        <InputMask {...inputProps} className="input destructive-input" mask={masks[mask]} onChange={handleChange} />
      )
    } else {
      return <InputMask {...inputProps} className="input" mask={masks[mask]} onChange={handleChange} />
    }
  }

  // MARK: - Actions

  function handleChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
    const needUnmask = mask != 'none'
    onTextChange(needUnmask ? unmask(value) : value)
  }

  return (
    <div className="flex flex-col justify-start gap-y-1">
      {showInput()}
      {showSupportingTextIfNeed()}
    </div>
  )
}
