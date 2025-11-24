import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { formatDateTimeLang } from '@/utilities/formatDateTime'
import Link from 'next/link'
import RichText from '@/components/RichText'
import { Post } from '@/payload-types'
import { LocaleType } from '@/utilities/types'

export default function PostCard({post, lang} : {post : Post, lang: LocaleType}) {
  return (
    <Link href={`/${lang}/posts/${post.slug}`}>
        <Card
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
  )
}
