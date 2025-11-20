'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Media } from '@/components/Media'


import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/NavigationMenu"
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/Drawer"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useMediaQuery } from "@/hooks/userMediaQuery"
import { CMSLink } from '@/components/Link'


interface NavItem {
  label: string
  href?: string
  submenu?: NavItem[]
}


interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  // console.log('data', data)
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const [isOpen, setIsOpen] = React.useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  
  if (isMobile) {
    return (
      <header className="border-b border-border z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/">
            <Media className='h-12' imgClassName='h-full w-fit' priority resource={data.logo} />
          </Link>

          <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu/>
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerTitle>
              </DrawerTitle>

              <div className="overflow-y-auto flex-1 px-0">
                <Accordion type="single" collapsible className="w-full">
                  {data.navigation?.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-0">
                      {item.type === 'dropdown' ? (
                        <>
                          <AccordionTrigger className="px-6 py-4 text-base font-semibold  hover:text-secondary transition-colors hover:no-underline data-[state=open]:bg-muted/50">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 pt-0">
                            <div className="space-y-3">
                              {/* {item.submenu.map((subitem, subidx) => (
                                <a
                                  key={subidx}
                                  href={subitem.href}
                                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subitem.label}
                                </a>
                              ))} */}
                              {item.links && item.links.map(l => l.link).map((link, i) => (
                                <CMSLink className="block py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors" key={i} {...link} />
                              ))}
                            </div>
                          </AccordionContent>
                        </>
                      ) : (
                        // <a
                        //   href={item.href}
                        //   className="px-6 py-4 block text-base font-semibold hover:text-secondary transition-colors"
                        //   onClick={() => setIsOpen(false)}
                        // >
                        //   {item.label}
                        // </a>
                        <CMSLink className="px-6 py-4 block text-base font-semibold hover:text-secondary transition-colors" {...item.links[0].link} />
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* <DrawerFooter>
                <Button variant="outline" className="rounded-full w-full font-semibold bg-transparent">
                  <h3>Sign In</h3>
                </Button>
                <Button className="rounded-full w-full font-semibold">
                  <h3>Get Started</h3>
                </Button>
              </DrawerFooter> */}
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    )
  }

  return (
    
    <header className="border-b border-border z-50" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-8">
        <Link href="/">
          <Media className='h-12' imgClassName='h-full w-fit' priority resource={data.logo} />
        </Link>
        <NavigationMenu className="flex-1">
          <NavigationMenuList>
            {data.navigation?.map((item, idx) =>
              item.type === 'dropdown' ? (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuTrigger className="text-sm focus:text-secondary hover:text-secondary font-medium !bg-inherit">{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col gap-1 p-2 min-w-[220px]">
                    {item.links && item.links.map(l => l.link).map((link, i) => (
                      <CMSLink className="px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-secondary" key={i} {...link} />
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={idx}>
                  <CMSLink className="px-4 py-3 rounded-md text-sm font-medium transition-colors hover:text-secondary" {...item.links[0].link} />
                  
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
        {/* <HeaderNav data={data} /> */}
      </div>
    </header>
  )
}
