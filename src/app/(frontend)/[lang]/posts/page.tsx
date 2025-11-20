import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { LocaleType } from '@/utilities/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  params: Promise<{
    lang: LocaleType
  }>
}

interface Post {
    id: number;
    title: string;
    categories?: { name: string; slug: string }[];
    meta?: {
        title?: string | null;
        image?: string | null;
        description?: string | null;
    } | undefined;
    slug: string;
}

const blogs = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    description: "Learn the fundamentals of web development and start your journey as a developer.",
    excerpt:
      "Web development is the process of building and maintaining websites. It includes web design, web content development, client-side scripting, server-side scripting, and network security configuration.",
    date: "Nov 12, 2025",
    author: "John Doe",
    category: "Tutorial",
    image: "/web-development-concept.png",
  },
  {
    id: 2,
    title: "React Hooks Explained",
    description: "Master React Hooks and write cleaner, more reusable component logic.",
    excerpt:
      "React Hooks let you use state and other React features without writing a class. Hooks are functions that 'hook into' React features.",
    date: "Nov 10, 2025",
    author: "Jane Smith",
    category: "React",
    image: "/react-hooks-concept.png",
  },
  {
    id: 3,
    title: "Responsive Design Best Practices",
    description: "Create beautiful responsive designs that work on all devices.",
    excerpt:
      "Responsive design is an approach to web design that aims to make web pages render well on a variety of devices and window or screen sizes.",
    date: "Nov 8, 2025",
    author: "Mike Johnson",
    category: "Design",
    image: "/responsive-design.png",
  },
  {
    id: 4,
    title: "Advanced TypeScript Patterns",
    description: "Explore advanced TypeScript patterns for building robust applications.",
    excerpt:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Learn advanced patterns to level up your code.",
    date: "Nov 5, 2025",
    author: "Sarah Wilson",
    category: "TypeScript",
    image: "/typescript-logo.png",
  },
  {
    id: 5,
    title: "Next.js Performance Optimization",
    description: "Optimize your Next.js applications for lightning-fast performance.",
    excerpt:
      "Next.js provides built-in optimizations for performance. Learn how to leverage them for the best user experience.",
    date: "Nov 1, 2025",
    author: "Chris Lee",
    category: "Next.js",
    image: "/nextjs-logo.png",
  },
  {
    id: 6,
    title: "CSS Grid Mastery",
    description: "Master CSS Grid and build complex layouts with ease.",
    excerpt:
      "CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns.",
    date: "Oct 28, 2025",
    author: "Emily Brown",
    category: "CSS",
    image: "/css-grid-layout.png",
  },
]

export default async function Page({params: paramsPromise}: Args) {
  const { lang } =  await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    locale: lang,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
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
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="overflow-hidden h-48 bg-muted">
              <img
                src="https://www.harvard.edu/wp-content/uploads/2023/11/110823_Features_KS_713-scaled.jpg"
                alt={blog.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-xs text-muted-foreground">{blog.date}</span>
              </div>
              <CardTitle className="text-xl line-clamp-2">{blog.title}</CardTitle>
              <CardDescription className="line-clamp-2">{blog.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
            </CardContent>
            <div className="p-6 pt-0 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{blog.author}</span>
              <Button variant="ghost" size="sm" className="gap-1">
                Read More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
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
