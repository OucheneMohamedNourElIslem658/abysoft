import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfoTranslations = {
  en: {
    email: "Email",
    phone: "Phone",
    address: "Address",
    hours: "Business Hours",
    emailValue: "contact@company.com",
    phoneValue: "+1 (555) 123-4567",
    addressValue: "123 Business St, City, State 12345",
    hoursValue: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
  ar: {
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    address: "العنوان",
    hours: "ساعات العمل",
    emailValue: "contact@company.com",
    phoneValue: "+1 (555) 123-4567",
    addressValue: "123 شارع الأعمال، المدينة، الولاية 12345",
    hoursValue: "من الاثنين إلى الجمعة: 9:00 صباحًا - 6:00 مساءً",
  },
  fr: {
    email: "Email",
    phone: "Téléphone",
    address: "Adresse",
    hours: "Heures d'ouverture",
    emailValue: "contact@company.com",
    phoneValue: "+1 (555) 123-4567",
    addressValue: "123 Rue des Affaires, Ville, État 12345",
    hoursValue: "Lun - Ven: 9:00 AM - 6:00 PM",
  },
}

type Language = "en" | "ar" | "fr"

interface ContactInfoProps {
  lang: Language
}

export function ContactInfo({ lang }: ContactInfoProps) {
  const t = contactInfoTranslations[lang]
  const isRTL = lang === "ar"

  return (
    <div className={`space-y-6 ${isRTL ? "text-right" : "text-left"}`}>
      <div className="flex items-start gap-4">
        <Mail className={`size-5 text-primary flex-shrink-0 mt-1 ${isRTL ? "ml-2" : "mr-2"}`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.email}</h5>
          <p className="text-muted-foreground text-sm">{t.emailValue}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone className={`size-5 text-primary flex-shrink-0 mt-1 ${isRTL ? "ml-2" : "mr-2"}`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.phone}</h5>
          <p className="text-muted-foreground text-sm">{t.phoneValue}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className={`size-5 text-primary flex-shrink-0 mt-1 ${isRTL ? "ml-2" : "mr-2"}`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.address}</h5>
          <p className="text-muted-foreground text-sm">{t.addressValue}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Clock className={`size-5 text-primary flex-shrink-0 mt-1 ${isRTL ? "ml-2" : "mr-2"}`} />
        <div>
          <h5 className="font-semibold text-foreground">{t.hours}</h5>
          <p className="text-muted-foreground text-sm">{t.hoursValue}</p>
        </div>
      </div>
    </div>
  )
}
