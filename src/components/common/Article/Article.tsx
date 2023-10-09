import Image from 'next/image'
import React from 'react'
import ArticleInfo from '../ArticleInfo/ArticleInfo'
import {
  getNextPostByCurrent,
  getPost,
  getPrevPostByCurrent,
} from '@/api/getPosts'
import './Article.scss'
import Button from '@/components/ui/Button/Button'
import Icon from '@/components/ui/Icon/Icon'
import { EntryFields } from 'contentful'

type Props = {
  articleSlug: string
}

const Article = async ({ articleSlug }: Props) => {
  const post = await getPost(articleSlug)

  const prevPost = await getPrevPostByCurrent(
    post.createdAt as EntryFields.Date
  )
  const nextPost = await getNextPostByCurrent(
    post.createdAt as EntryFields.Date
  )

  return (
    <div className="article">
      <div className="article__cover">
        <Image
          src={post.img.url as string}
          alt={post.img.alt as string}
          fill={true}
        />
      </div>
      <ArticleInfo
        category={post.articleInfo.category}
        date={post.articleInfo.date}
        modifiers="article"
      />
      <h1 className="article__title">{post.title}</h1>
      <div className="article__content">{post.text}</div>
      <div className="article__nav">
        {!!prevPost.url && (
          <Button link={`/post/${prevPost.url}`}>
            <Icon name="arrow-left" />
            Предыдущая
          </Button>
        )}
        {!!nextPost.url && (
          <Button link={`/post/${nextPost.url}`} modifiers="article">
            Следующая
            <Icon name="arrow-right" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default Article
