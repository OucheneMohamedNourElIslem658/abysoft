export type Language = "ar" | "en" | "fr";

export type Translations = {
    [key in Language]: {
        [key: string]: string;
    };
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
}