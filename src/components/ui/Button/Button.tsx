import { classModifiers } from '@/utils/classModifiers'
import Link from 'next/link'
import React from 'react'
import './Button.scss'

type IButton = {
  link?: string
  onClick?:
    | React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement | HTMLInputElement
      >
    | any
  modifiers?: string
  target?: '_blank'
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  children?: React.ReactNode
}

const Button = ({
  link,
  onClick,
  modifiers,
  target,
  type,
  disabled,
  children,
}: IButton) => {
  const className = 'ui-button' + classModifiers('ui-button', modifiers)
  return (
    <>
      {link && (
        <Link
          className={className}
          onClick={onClick}
          href={link}
          target={target}
        >
          {children}
        </Link>
      )}
      {!link && (
        <button
          className={className}
          onClick={onClick}
          type={type ?? 'button'}
          {...(disabled ? { disabled } : {})}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button
