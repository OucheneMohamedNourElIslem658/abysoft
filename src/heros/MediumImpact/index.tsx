import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page["hero"]> = ({ links, media, richText }) => {
  return (
    <section className="relative w-full overflow-hidden bg-background" style={{ height: "calc(100vh - 80px)" }}>
      <div className="absolute inset-0 w-full h-full">
        {media && typeof media === "object" && (
          <Media
            className="w-full h-full"
            fill
            videoClassName="object-cover w-full h-full"
            imgClassName="object-cover w-full h-full"
            priority
            resource={media}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-between p-6 md:p-12">
        <div />
        <div className="flex flex-col gap-8 max-w-2xl">
          {richText && (
            <div className="text-white">
              <RichText data={richText} enableGutter={false} />
            </div>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-col md:flex-row gap-3 md:gap-4">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink
                    className="inline-flex"
                    {...link}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
