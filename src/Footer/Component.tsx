import type { Footer } from '@/payload-types'
import Link from 'next/link'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { LangToggler } from '@/components/LangToggler/Component'
import { LocaleType } from '@/utilities/types'




export async function Footer({lang}: {lang: LocaleType}) {

  // const locale = lang as Footer['locale']
  const footerData: Footer = await getCachedGlobal('footer', 1, lang)() as Footer

  if (!footerData) return null
  
  return (
    
    <footer className="mt-auto border-t border-border bg-background">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <Link href="/">
            <Media className='h-12' imgClassName='h-full w-fit' priority resource={footerData.logo} />
          </Link>
          {footerData.navigation?.map((section, i) => (
            <div key={i}>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">{section.title}</h3>
              <ul className="space-y-3">
                {section.links && section.links.map(l => l.link).map((link, i) => (
                  <li key={i}>
                    <CMSLink className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer" {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} AbySoft. All rights reserved.
          </p>

          {/* Right: Theme & Language Controls */}
          <div className="flex items-center gap-4">
            {/* <FooterControls /> */}
            <ThemeSelector />
            <LangToggler />
          </div>
        </div>
      </div>
    </footer>

  )
}
