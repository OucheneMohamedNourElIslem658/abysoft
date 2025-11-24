"use client"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { sendMailAction } from "@/app/actions/send-mail"
import { contactFormTranslations, getTranslation } from "@/hooks/languages/translations"
import { LocaleType } from "@/utilities/types"
import { Toaster } from "../ui/sonner"
import { useEffect } from "react"
import { toast } from "sonner"

interface ContactFormProps {
  lang: LocaleType
}

export function ContactForm({ lang }: ContactFormProps) {
  const t = getTranslation(lang, contactFormTranslations)
  const [state, action, isPending] = useActionState(sendMailAction, null)
  const isSuccess = state?.success
  const message = state?.message

  useEffect(() => {
    if (!state) return

    if (isSuccess) {
      toast.success(message ?? t.send ?? "Sent")
    } else {
      toast.error(message ?? t.sending ?? "Error")
    }
  }, [state, isSuccess, message, t.send, t.sending])

  return (
    <form action={action} className={`space-y-6`}>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder={t.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder={t.emailPlaceholder}
          dir="ltr"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold mb-2">
          {t.subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder={t.subjectPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder={t.messagePlaceholder}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isPending} className="">
          {isPending ? t.sending : t.send}
        </Button>
      </div>
      <Toaster className="bg-destructive" richColors position="top-center"/>
    </form>
  )
}
