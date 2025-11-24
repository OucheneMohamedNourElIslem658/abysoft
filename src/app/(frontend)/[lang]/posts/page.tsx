import type { Metadata } from 'next/types'

// import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { getTranslation, postsPageTranslations } from '@/hooks/languages/translations'
import { LocaleType } from '@/utilities/types'
import PostCard from '@/components/PostCard'

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
          <PostCard post={post} lang={lang} key={i} />
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
    title: `Abysoft`,
  }
}
