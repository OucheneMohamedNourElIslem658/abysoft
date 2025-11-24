import { contactInfoTranslations, getTranslation } from "@/hooks/languages/translations"
import { Contact } from "@/payload-types"
import { LocaleType } from "@/utilities/types"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

interface ContactInfoProps {
  lang : LocaleType
  contact: Contact
}

export async function ContactInfo({ contact, lang }: ContactInfoProps) {
  const t = getTranslation(lang, contactInfoTranslations)

  return (
    <div className={`space-y-6`}>
      <div className="flex items-start gap-4">
        <Mail className={`size-5 text-primary flex-shrink-0 mt-1`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.email}</h5>
          <p className="text-muted-foreground text-sm">{contact.email}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className={`size-5 text-primary flex-shrink-0 mt-1`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.phone}</h5>
          <p className="text-muted-foreground text-sm">{contact.phone}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className={`size-5 text-primary flex-shrink-0 mt-1`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.address}</h5>
          <p className="text-muted-foreground text-sm">{contact.address}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Clock className={`size-5 text-primary flex-shrink-0 mt-1`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.hours}</h5>
          <p className="text-muted-foreground text-sm">{contact.timework}</p>
        </div>
      </div>
    </div>
  )
}
