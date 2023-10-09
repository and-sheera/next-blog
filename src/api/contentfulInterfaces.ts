import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol
  url: EntryFieldTypes.Symbol
  textPreview: EntryFieldTypes.Text
  imgCover: EntryFieldTypes.AssetLink
  text: EntryFieldTypes.Text
  date: EntryFieldTypes.Date
  category: EntryFieldTypes.EntryLink<TypePostsCategoriesSkeleton>
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  'blogPost'
>
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>

export interface TypePostsCategoriesFields {
  name: EntryFieldTypes.Symbol
}

export type TypePostsCategoriesSkeleton = EntrySkeletonType<
  TypePostsCategoriesFields,
  'postsCategories'
>
export type TypePostsCategories<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePostsCategoriesSkeleton, Modifiers, Locales>
