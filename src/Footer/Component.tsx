"use client"
import React from 'react'

import type { Footer } from '@/payload-types'
import { useState, useEffect } from "react"
import { Moon, Sun, Globe } from "lucide-react"
import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#security" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#api" },
      { label: "Community", href: "#community" },
      { label: "Support", href: "#support" },
    ],
  },
]

export function Footer() {
  // const footerData: Footer = await getCachedGlobal('footer', 1)()

  // const navItems = footerData?.navItems || []

  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [language, setLanguage] = useState("en")
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark"
    const savedLang = localStorage.getItem("language") as string

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    }
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  const handleLanguageChange = (code: string) => {
    setLanguage(code)
    localStorage.setItem("language", code)
    setShowLangMenu(false)
  }

  return (
    // <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
    //   <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
    //     <Link className="flex items-center" href="/">
    //       <Logo />
    //     </Link>

    //     <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
    //       <ThemeSelector />
    //       <nav className="flex flex-col md:flex-row gap-4">
    //         {navItems.map(({ link }, i) => {
    //           return <CMSLink className="text-white" key={i} {...link} />
    //         })}
    //       </nav>
    //     </div>
    //   </div>
    // </footer>

    <footer className="mt-auto border-t border-border bg-background">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <Link href="/">
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          </Link>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
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
          <p className="text-muted-foreground text-sm">© 2025 Build UI Components. All rights reserved.</p>

          {/* Right: Theme & Language Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted hover:bg-accent transition-colors text-foreground"
              aria-label="Toggle theme"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <>
                  <Moon size={16} />
                  <span className="text-xs hidden sm:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun size={16} />
                  <span className="text-xs hidden sm:inline">Light</span>
                </>
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted hover:bg-accent transition-colors text-foreground"
                aria-label="Change language"
                title="Select language"
              >
                <Globe size={16} />
                <span className="text-xs hidden sm:inline uppercase">
                  {languages.find((l) => l.code === language)?.code}
                </span>
              </button>

              {/* Language Menu */}
              {showLangMenu && (
                <div className="absolute bottom-full right-0 mb-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        language === lang.code ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
