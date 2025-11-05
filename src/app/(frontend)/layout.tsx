import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { geistMono, googleSans } from './fonts'
import ProductsBlock from '@/blocks/Products/Component'
import FeatureComponent from '@/blocks/Feature/Component'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(googleSans.variable, geistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          {/* <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          /> */}

          <div className='absolute top-0 left-0 right-0 bg-background'>
            <Header />
          </div>
          {children}
          <ProductsBlock/>
          <FeatureComponent
            label="FOR PROFESSIONALS"
            title="Ensure Document Quality"
            description="Maintain the highest standards for your professional documents and communications. Our advanced detection system helps you identify and correct any inconsistencies or issues before publication or submission."
            features={[
              {
                title: "Advanced Analytics",
                description: "Detailed reports on document originality and content matching.",
              },
              {
                title: "Quality Assurance",
                description: "Multi-layered verification process for complete accuracy.",
              },
              {
                title: "Integration Support",
                description: "Seamless integration with your existing workflow and tools.",
              },
            ]}
            buttonText="Enterprise Solutions"
            image="https://cdn.plagramme.com/landing/pages/two-column/students.webp?w=1080&q=75"
            direction="reverse"
            className="bg-gray-95"
          />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
