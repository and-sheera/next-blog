import React from 'react'
import './Inner.scss'
import { classModifiers } from '@/utils/classModifiers'

interface IInner {
  children: React.ReactNode
  modifiers?: string
}

const Inner = ({ children, modifiers }: IInner) => {
  return (
    <div className={'inner ' + classModifiers('inner', modifiers)}>
      {children}
    </div>
  )
}

export default Inner
