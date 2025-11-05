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
      className="relative"
      data-theme="dark"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex container flex-col justify-end items-start h-screen pb-16">
          <div className="max-w-2xl z-10">

            {richText && <RichText data={richText} enableGutter={false} />}
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex gap-4 flex-col md:flex-row">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="select-none min-h-screen w-full overflow-hidden">
        {media && typeof media === 'object' && (
          <Media className='h-full' fill videoClassName='object-cover h-full w-full' imgClassName="object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
