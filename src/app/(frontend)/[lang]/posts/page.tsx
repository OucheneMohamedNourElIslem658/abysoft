import type { Metadata } from 'next/types'

// import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { formatDateTimeLang } from '@/utilities/formatDateTime'
import Link from 'next/link'
import RichText from '@/components/RichText'
import { getTranslation, postsPageTranslations } from '@/hooks/languages/translations'
import { LocaleType } from '@/utilities/types'

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  params: Promise<{
    lang: LocaleType
  }>
}




export default async function Page({params: paramsPromise}: Args) {
  const { lang } =  await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const t = getTranslation(lang, postsPageTranslations)

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    locale: lang,
    limit: 12,
    overrideAccess: false,
    // select: {
    //   title: true,
    //   slug: true,
    //   categories: true,
    //   meta: true,
    // },
  })

  console.log('posts', posts.docs)

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>{t.title}</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      {/* <CollectionArchive posts={posts.docs} /> */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.docs.map((post, i) => (
          <Link href={`/${lang}/posts/${post.slug}`} key={i}>
          <Card
            key={i}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="overflow-hidden h-48 bg-muted">
              <Media resource={post.heroImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                {post.categories && post.categories.length > 0 && (
                  post.categories.map((category, i) => (
                    <span key={i} className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {typeof category === 'object' && category.title}
                    </span>
                  ))
                )}
                <span className="text-xs text-muted-foreground">{formatDateTimeLang(post.publishedAt, lang)}</span>
              </div>
              <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
              {/* <CardDescription className="line-clamp-2">{blog.description}</CardDescription> */}
            </CardHeader>
            <CardContent className="flex-grow">
              {/* <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p> */}
              <RichText data={post.content} className="[&>*]:!text-sm line-clamp-2 [&>strong]:!font-extralight" enableGutter={false} />
            </CardContent>
            <div className="p-6 pt-0 flex items-center justify-between">
              <span className="text-xs text-muted-foreground capitalize">
                {post.populatedAuthors && post.populatedAuthors.length > 0 && post.populatedAuthors.map((author, i) => (
                  <span key={i}>{author.name}</span>
                ))}</span>
            </div>
          </Card>
          </Link>
        ))}
      </div>

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Abysoft Blog`,
  }
}
