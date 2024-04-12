import './styles.module.scss'
import React from 'react'
import { tv } from 'tailwind-variants'
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { SupportingText, SupportingTextConfig } from '../input/supporting-text'

interface TextAreaProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: Path<T>
  error?: FieldError
  options?: RegisterOptions
  supportingTextConfig?: SupportingTextConfig
  register: UseFormRegister<T>
}

const textareaVariant = tv({
  base: 'input',
  variants: {
    error: {
      true: 'error'
    }
  }
})

export default function TextArea<T extends FieldValues>({
  error,
  name,
  options,
  className,
  supportingTextConfig,
  register,
  ...textareaProps
}: TextAreaProps<T>) {
  const hasError = error != undefined
  return (
    <div className="flex flex-col justify-start gap-y-1">
      <textarea
        className={textareaVariant({ error: hasError, className })}
        {...textareaProps}
        {...register(name, options)}
      />
      <SupportingText theme={hasError ? 'destructive' : 'default'}>
        {hasError ? error?.message : supportingTextConfig?.message}
      </SupportingText>
    </div>
  )
}
