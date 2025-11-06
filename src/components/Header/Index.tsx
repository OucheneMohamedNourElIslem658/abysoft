"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/NavigationMenu"
import { Drawer, DrawerContent, DrawerHeader, DrawerClose, DrawerTrigger, DrawerFooter, DrawerTitle } from "@/components/ui/Drawer"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useMediaQuery } from "@/hooks/userMediaQuery"
import Link from "next/link"
import { Logo } from "../Logo/Logo"

interface NavItem {
  label: string
  href?: string
  submenu?: NavItem[]
}

const NAV_ITEMS: NavItem[] = [
  { label: "Build", href: "#build" },
  {
    label: "Products",
    submenu: [
      { label: "Firestore", href: "#firestore" },
      { label: "Realtime Database", href: "#database" },
      { label: "Authentication", href: "#auth" },
      { label: "Cloud Functions", href: "#functions" },
    ],
  },
  { label: "Docs", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  if (isMobile) {
    return (
      <header className="bg-muted/30 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/">
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
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
                  {NAV_ITEMS.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-0">
                      {item.submenu ? (
                        <>
                          <AccordionTrigger className="px-6 py-4 text-base font-semibold hover:text-secondary transition-colors hover:no-underline data-[state=open]:bg-muted/50">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 pt-0">
                            <div className="space-y-3">
                              {item.submenu.map((subitem, subidx) => (
                                <a
                                  key={subidx}
                                  href={subitem.href}
                                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subitem.label}
                                </a>
                              ))}
                            </div>
                          </AccordionContent>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="px-6 py-4 block text-base font-semibold hover:text-secondary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
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
    <header className="bg-muted/30 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-8">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>

        <NavigationMenu className="flex-1">
          <NavigationMenuList>
            {NAV_ITEMS.map((item, idx) =>
              item.submenu ? (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuTrigger className="text-sm font-medium">{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col gap-1 p-2 min-w-[220px]">
                    {item.submenu.map((subitem, subidx) => (
                      <NavigationMenuLink
                        key={subidx}
                        href={subitem.href}
                        className="px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-secondary"
                      >
                        {subitem.label}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink
                    href={item.href}
                    className="text-sm md:text-md font-medium;"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
