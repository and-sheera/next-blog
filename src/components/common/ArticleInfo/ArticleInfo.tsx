import { classModifiers } from '@/utils/classModifiers'
import Link from 'next/link'
import React from 'react'
import './ArticleInfo.scss'

export interface IArticleInfo {
  category: {
    href?: string
    name: string | undefined
  }
  date: string
  modifiers?: string
}

const ArticleInfo = ({ modifiers, category, date }: IArticleInfo) => {
  return (
    <div
      className={'article-info ' + classModifiers('article-info', modifiers)}
    >
      {category.href ? (
        <Link href={category.href} className="article-info__category">
          {category.name}
        </Link>
      ) : (
        <div className="article-info__category">{category.name}</div>
      )}

      <div className="article-info__date">{date}</div>
    </div>
  )
}

export default ArticleInfo
