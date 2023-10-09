import React from 'react'
import './PageContent.scss'
import { classModifiers } from '@/utils/classModifiers'

interface IPageContent {
  children: React.ReactNode
  modifiers?: string
}

const PageContent = ({ children, modifiers }: IPageContent) => {
  return (
    <div
      className={'page-content ' + classModifiers('page-content', modifiers)}
    >
      {children}
    </div>
  )
}

export default PageContent
