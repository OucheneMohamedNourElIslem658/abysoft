"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from '@/components/ui/select'

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
]


export function LangToggler() {
const router = useRouter()
const pathname = usePathname() ?? '/'
const [value, setValue] = useState('')

useEffect(() => {
  // derive current language from pathname (client-only)
  const pathSegments = pathname.split('/').filter(Boolean)
  const lang = pathSegments[0] || 'en'
  if (['en', 'ar', 'fr'].includes(lang)) {
    setValue(lang)
  } else {
    setValue('en')
  }
}, [pathname])

const onLangChange = (code: string) => {
  const pathSegments = pathname.split('/').filter(Boolean)
  const currentLang = pathSegments[0] || 'en'

  // replace the leading lang segment (or prepend if missing)
  let newPathname: string
  if (pathSegments.length === 0) {
    newPathname = `/${code}`
  } else {
    newPathname = pathname.replace(`/${currentLang}`, `/${code}`)
  }

  setValue(code)
  router.push(newPathname)
}

return (
  <Select onValueChange={onLangChange} value={value}>
    <SelectTrigger
      aria-label="Select language"
      className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none"
    >
      <Globe size={16}/>
      <SelectValue placeholder="Language" />
    </SelectTrigger>

    <SelectContent>
      {languages.map((lang) => (
        <SelectItem key={lang.code} value={lang.code}>
          {lang.code}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)
}
