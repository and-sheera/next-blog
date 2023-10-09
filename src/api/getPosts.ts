import { cache } from 'react'
import { client } from './contentfulClient'
import { TypeBlogPostSkeleton } from './contentfulInterfaces'
import { EntryFields } from 'contentful'

interface IPostsQueryParam {
  limit?: number
  skip?: number
}

export const getPosts = cache(async (params?: IPostsQueryParam) => {
  const posts = await client.withoutUnresolvableLinks
    .getEntries<TypeBlogPostSkeleton>({
      content_type: 'blogPost',
      limit: params?.limit,
      skip: params?.skip,
      order: ['sys.createdAt'],
    })
    .then(function (entries) {
      return entries.items
    })
  return posts.map((item) => ({
    url: item.fields.url,
    textPreview: item.fields.textPreview,
    articleInfo: {
      category: {
        name: item.fields.category?.fields.name,
      },
      date: item.fields.date,
    },
    title: item.fields.title,
    desc: item.fields.text,
  }))
})

export const getPost = cache(async (slug: string) => {
  const post = await client.withoutUnresolvableLinks
    .getEntries<TypeBlogPostSkeleton>({
      content_type: 'blogPost',
      'fields.url': slug,
      limit: 1,
    })
    .then(function (entries) {
      return entries.items[0]
    })
  return {
    createdAt: post.sys.createdAt,
    url: post.fields.url,
    img: {
      url: 'https:' + post.fields.imgCover?.fields.file?.url,
      alt: post.fields.imgCover?.fields.title,
    },
    text: post.fields.text,
    articleInfo: {
      category: {
        name: post.fields.category?.fields.name,
      },
      date: post.fields.date,
    },
    title: post.fields.title,
    desc: post.fields.text,
  }
})

export const getPrevPostByCurrent = cache(
  async (currentCreatedAt: EntryFields.Date) => {
    const post = await client.withoutUnresolvableLinks
      .getEntries<TypeBlogPostSkeleton>({
        content_type: 'blogPost',
        order: ['-sys.createdAt'],
        'sys.createdAt[lt]': currentCreatedAt,
        limit: 1,
      })
      .then(function (entries) {
        return entries.items[0]
      })
    return {
      url: post?.fields?.url,
    }
  }
)

export const getNextPostByCurrent = cache(
  async (currentCreatedAt: EntryFields.Date) => {
    const post = await client.withoutUnresolvableLinks
      .getEntries<TypeBlogPostSkeleton>({
        content_type: 'blogPost',
        order: ['sys.createdAt'],
        'sys.createdAt[gt]': currentCreatedAt,
        limit: 1,
      })
      .then(function (entries) {
        return entries.items[0]
      })
    return {
      url: post?.fields?.url,
    }
  }
)

export const getPostsByTitle = async (title: string) => {
  const posts = await client.withoutUnresolvableLinks
    .getEntries<TypeBlogPostSkeleton>({
      content_type: 'blogPost',
      'fields.title': title,
      limit: 10,
      order: ['sys.createdAt'],
    })
    .then(function (entries) {
      return entries.items
    })
  return posts.map((item) => ({
    url: item.fields.url,
    textPreview: item.fields.textPreview,
    articleInfo: {
      category: {
        name: item.fields.category?.fields.name,
      },
      date: item.fields.date,
    },
    title: item.fields.title,
    desc: item.fields.text,
  }))
}
