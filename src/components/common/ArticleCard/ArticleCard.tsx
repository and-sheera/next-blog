import React from 'react'
import ArticleInfo, { IArticleInfo } from '../ArticleInfo/ArticleInfo'
import { classModifiers } from '@/utils/classModifiers'
import Link from 'next/link'
import './ArticleCard.scss'

export interface IArticleCard {
  url: string
  articleInfo: IArticleInfo
  title: string
  textPreview?: string | undefined
  modifiers?: string | undefined
}

const ArticleCard = ({
  url,
  articleInfo,
  title,
  textPreview,
  modifiers,
}: IArticleCard) => {
  return (
    <Link
      href={`/post/${url}`}
      className={'article-card ' + classModifiers('article-card', modifiers)}
    >
      <ArticleInfo
        category={articleInfo.category}
        date={articleInfo.date}
        modifiers="article-card"
      />
      <div className="article-card__title">{title}</div>
      {textPreview && <div className="article-card__desc">{textPreview}</div>}
    </Link>
  )
}

export default ArticleCard
