import { SupportingText, SupportingTextConfig } from '../input/supporting-text'
import React from 'react'
import './styles.module.scss'

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  supportingTextConfig?: SupportingTextConfig
  onTextChange: (value: string) => void
}

export default function TextArea({ supportingTextConfig, onTextChange, ...textareaProps }: TextAreaProps) {
  // MARK: - Actions

  function handleChange({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) {
    onTextChange(value)
  }

  return (
    <div className="flex flex-col justify-start gap-y-1">
      <textarea onChange={handleChange} {...textareaProps} />
      <SupportingText theme={supportingTextConfig?.theme ?? 'default'}>{supportingTextConfig?.message}</SupportingText>
    </div>
  )
}
