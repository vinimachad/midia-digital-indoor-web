import React from 'react'
import { SupportingText } from './supporting-text'
import { FieldValues, Path, UseFormRegister, RegisterOptions, FieldError } from 'react-hook-form'
import { tv } from 'tailwind-variants'

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  error?: FieldError
  supportingText?: string
  register: UseFormRegister<T>
  options?: RegisterOptions
}

const inputVariant = tv({
  base: 'input',
  variants: {
    error: {
      true: 'error'
    }
  }
})

export default function Input<T extends FieldValues>({
  name,
  error,
  options,
  supportingText,
  register,
  ...inputProps
}: InputProps<T>) {
  const hasError = error != undefined

  return (
    <div className="flex flex-col justify-start gap-y-1">
      <input className={inputVariant({ error: hasError })} {...register(name, options)} {...inputProps} />
      <SupportingText theme={hasError ? 'destructive' : 'default'}>
        {hasError ? error.message : supportingText}
      </SupportingText>
    </div>
  )
}
