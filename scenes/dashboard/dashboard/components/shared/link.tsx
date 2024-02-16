import Link from 'next/link'
import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const variants = tv({
  base: 'text-sm',
  variants: {
    selected: {
      true: 'transition-colors hover:text-foreground/80 text-foreground',
      false: 'transition-colors hover:text-foreground/80 text-foreground/60'
    }
  },
  defaultVariants: {
    selected: false
  }
})

interface Props extends React.LinkHTMLAttributes<HTMLLinkElement>, VariantProps<typeof variants> {
  children: React.ReactNode
}

export default function NavigationButton({ href, children, selected }: Props) {
  return (
    <Link className={variants({ selected })} href={href ?? '/dashboard/overview'}>
      {children}
    </Link>
  )
}
