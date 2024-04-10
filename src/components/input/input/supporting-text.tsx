import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
  base: 'text-sm',
  variants: {
    theme: {
      default: 'text-slate-500',
      destructive: 'text-destructive'
    }
  },
  defaultVariants: {
    theme: 'default'
  }
})

interface SupportingTextProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof variants> {}
export type SupportingTextConfig = { theme: 'default' | 'destructive'; message: string }

export function SupportingText({ theme, ...props }: SupportingTextProps) {
  return <span className={variants({ theme })}>{props.children}</span>
}
