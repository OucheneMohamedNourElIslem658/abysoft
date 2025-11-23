import { LocaleType } from "@/utilities/types";

export type Translation = {
  [key: string]: string;
}

export type Translations = {
  [key in NonNullable<LocaleType>]: Translation;
};

export const contactFormTranslations : Translations = {
  en: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "How can we help?",
    messagePlaceholder: "Tell us more about your project...",
    send: "Send Message",
    sending: "Sending...",
  },
  ar: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    namePlaceholder: "اسمك",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "كيف يمكننا مساعدتك؟",
    messagePlaceholder: "أخبرنا المزيد عن مشروعك...",
    send: "إرسال الرسالة",
    sending: "جاري الإرسال...",
  },
  fr: {
    name: "Nom",
    email: "Email",
    subject: "Sujet",
    message: "Message",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "Comment pouvons-nous vous aider?",
    messagePlaceholder: "Parlez-nous davantage de votre projet...",
    send: "Envoyer le message",
    sending: "Envoi en cours...",
  },

  all: {}
}

export const contactpageTranslations : Translations = {
  en: {
    title: "Get in touch",
    subtitle: "Our friendly team would love to hear from you!",
  },
  ar: {
    title: "تواصل معنا",
    subtitle: "فريقنا الودود يود أن يسمع منك!",
  },
  fr: {
    title: "Nous contacter",
    subtitle: "Notre équipe sympathique aimerait vous entendre!",
  },

  all: {}
}

export const postsPageTranslations : Translations = {
  en: {
    title: "Posts",
  },
  ar: {
    title: "مقالات",
  },
  fr: {
    title: "Articles",
  },

  all: {}
}

export const contactInfoTranslations : Translations = {
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

  all: {}
}

export const getTranslation = (lang: LocaleType, translations : Translations): Translation => {
  return translations[lang || 'en'];
}