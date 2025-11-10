import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import React from 'react'

import { Footer } from '@/Footer/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { geistMono, googleSans } from './fonts'
import ComparisonStepper from '@/blocks/SymmetricStepper/Component'
import { PricingBlock } from '@/blocks/Pricing/Component'
import TestimonialsBlock from '@/blocks/Testimonials/Component'
import { Header } from '@/Header/Component'
import { LocaleType } from '@/utilities/types'

interface Args {
  children: React.ReactNode,
  params: Promise<{
    lang: LocaleType
  }>
}
  
    

export default async function RootLayout({ params, children }: Args) {
 
  const { lang } = await params
  return (
    <html className={cn(googleSans.variable, geistMono.variable)} lang={lang} suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          
          <div className='fixed top-0 left-0 right-0  z-50 bg-background'>
            <Header />  
          </div>
          {children}
          {/* <ComparisonStepper/>
          <PricingBlock/>
          <TestimonialsBlock/> */}
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
