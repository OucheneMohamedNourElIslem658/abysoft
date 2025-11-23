import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import { ContactInfo } from "@/components/ContactInfo/Component"
import { contactpageTranslations } from "@/hooks/languages/translations"
import { Language } from "prism-react-renderer"

interface ContactPageProps {
  params: Promise<{ lang: Language }>
}

export default async function ContactPage({ params: paramsPromise }: ContactPageProps) {
  const { lang } = await paramsPromise
  const t = contactpageTranslations[lang]

  return (
    <main className={`min-h-screen bg-background`}>
      <div className="container mx-auto px-4 py-16 my-20">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start`}
        >
          {/* Left: Form Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">{t.title}</h1>
              <p className="text-lg text-muted-foreground">{t.subtitle}</p>
            </div>

            <ContactForm lang={lang} />
          </div>

          {/* Right: Contact Info Section */}
          <div className="space-y-8">
            <div className="relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <img src="https://cdn.generationvoyage.fr/2025/04/Universite-Harvard-Boston-USA.jpeg" alt="Contact" className="w-full h-full object-cover" />
            </div>
            <Card>
              <CardContent className="pt-6">
                <ContactInfo lang={lang} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
