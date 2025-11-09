'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <div
      className="relative h-screen -z-10"
      // data-theme="dark"
    >
      <div className="absolute bottom-0 left-0 w-full h-full">
        <div className="flex container h-full mt-auto flex-col justify-end items-start pb-10">
          <div className="max-w-2xl">

            {richText && <RichText data={richText} enableGutter={false} />}
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex gap-4 flex-col md:flex-row">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink className='text-white' {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
        {media && typeof media === 'object' && (
          <Media className='h-full' fill videoClassName='object-cover h-full w-full' imgClassName="object-cover w-full h-full" priority resource={media} />
        )}
    </div>
  )
}
