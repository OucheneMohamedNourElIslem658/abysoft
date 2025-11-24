import { contactInfoTranslations, getTranslation } from "@/hooks/languages/translations"
import { LocaleType } from "@/utilities/types"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

interface ContactInfoProps {
  lang : LocaleType
}

export async function ContactInfo({ lang }: ContactInfoProps) {
  const t = getTranslation(lang, contactInfoTranslations)

  return (
    <div className={`space-y-6`}>
      <div className="flex items-start gap-4">
        <Mail className={`size-5 text-primary flex-shrink-0 mt-1`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.email}</h5>
          <p className="text-muted-foreground text-sm">{t.emailValue}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className={`size-5 text-primary flex-shrink-0 mt-1`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.phone}</h5>
          <p className="text-muted-foreground text-sm">{t.phoneValue}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className={`size-5 text-primary flex-shrink-0 mt-1`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.address}</h5>
          <p className="text-muted-foreground text-sm">{t.addressValue}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Clock className={`size-5 text-primary flex-shrink-0 mt-1`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.hours}</h5>
          <p className="text-muted-foreground text-sm">{t.hoursValue}</p>
        </div>
      </div>
    </div>
  )
}
