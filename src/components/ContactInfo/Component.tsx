import { Contact } from "@/payload-types"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfoTranslations = {
  en: {
    email: "Email",
    phone: "Phone",
    address: "Address",
    hours: "Business Hours",
   
  },
  ar: {
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    address: "العنوان",
    hours: "ساعات العمل",
    
  },
  fr: {
    email: "Email",
    phone: "Téléphone",
    address: "Adresse",
    hours: "Heures d'ouverture",
  },
}

type Language = "en" | "ar" | "fr"

interface ContactInfoProps {
  lang: Language
  contact: Contact
}

export function ContactInfo({ contact, lang }: ContactInfoProps) {
  const t = contactInfoTranslations[lang]
  const isRTL = lang === "ar"

  return (
    <div className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
      <div className="flex items-start gap-4">
        <Mail className={`size-5 text-primary flex-shrink-0 mt-1 ${isRTL ? "ml-2" : "mr-2"}`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.email}</h5>
          <p className="text-muted-foreground text-sm">{contact.email}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className={`size-5 text-primary flex-shrink-0 mt-1 ${isRTL ? "ml-2" : "mr-2"}`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.phone}</h5>
          <p className="text-muted-foreground text-sm">{contact.phone}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className={`size-5 text-primary flex-shrink-0 mt-1 ${isRTL ? "ml-2" : "mr-2"}`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.address}</h5>
          <p className="text-muted-foreground text-sm">{contact.address}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Clock className={`size-5 text-primary flex-shrink-0 mt-1 ${isRTL ? "ml-2" : "mr-2"}`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.hours}</h5>
          <p className="text-muted-foreground text-sm">{contact.timework}</p>
        </div>
      </div>
    </div>
  )
}
