"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
]

export function FooterControls() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState("en")
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem("language") || "en"
    setLanguage(savedLang)
  }, [])

  const toggleTheme = () => {
    // console.log(theme);
    
    setTheme(theme === "light" ? "dark" : "light")
  }

  const handleLanguageChange = (code: string) => {
    setLanguage(code)
    localStorage.setItem("language", code)
    setShowLangMenu(false)

    const newPathname = code === "ar" ? `/rtl${pathname}` : pathname.replace(/^\/rtl/, "")
    router.push(newPathname)
  }

  if (!mounted) return null

  return (
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
          <span className="text-xs hidden sm:inline uppercase">{languages.find((l) => l.code === language)?.code}</span>
        </button>

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
  )
}
