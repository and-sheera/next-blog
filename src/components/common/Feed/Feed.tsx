import React from 'react'
import ArticleCard, { IArticleCard } from '../ArticleCard/ArticleCard'
import './Feed.scss'
import Pagination from '../Pagination/Pagination'
import { client } from '@/api/contentfulClient'
import { getPosts } from '@/api/getPosts'

const data = [
  {
    href: '/post/post-1',
    articleInfo: {
      category: {
        name: 'Категория 1',
      },
      date: '13 дек 2020',
    },
    title: 'Управление ИТ-активами – скучная рутина или творческая задача?',
    desc: 'Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. ',
  },
  {
    href: '/post/post-2',
    articleInfo: {
      category: {
        name: 'Категория 2',
      },
      date: '13 дек 2020',
    },
    title: 'Управление ИТ-активами – скучная рутина или творческая задача?',
    desc: 'Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. ',
  },
  {
    href: '/post/post-3',
    articleInfo: {
      category: {
        name: 'Категория 3',
      },
      date: '12 dec 2023',
    },
    title: 'ITAM&SAMDay – самая настоящая удача!',
  },
]

export const revalidate = 5

const Feed = async ({ page }: { page: string | string[] | undefined }) => {
  const postNum = 2
  const posts = await getPosts({
    limit: postNum,
    skip: page && !isNaN(+page) ? +page * postNum - postNum : 0,
  })

  const allPosts = await getPosts()
  const pagesNum = Math.ceil(allPosts.length / postNum)
  return (
    <div className="feed">
      {posts.map((item, index) => (
        <ArticleCard
          key={item.url}
          url={item.url}
          articleInfo={item.articleInfo}
          title={item.title}
          textPreview={item.textPreview}
        />
      ))}
      {pagesNum > 1 && !!posts.length && (
        <Pagination pagesNum={pagesNum} currentPage={page ? +page : 1} />
      )}
    </div>
  )
}

export default Feed
