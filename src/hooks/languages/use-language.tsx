import { useCallback, useMemo } from "react";
import { Language, Translations } from "./translations";

function resolveLang(
    params?: { lang?: string } | string,
    defaultLang: Language = "en"
): Language {
    const candidate = typeof params === "string" ? params : params?.lang;
    if (typeof candidate === "string") {
        const short = candidate.slice(0, 2).toLowerCase();
        if (short === "ar" || short === "en" || short === "fr") return short as Language;
    }

    if (typeof window !== "undefined") {
        const docLang = document.documentElement.lang?.slice(0, 2).toLowerCase();
        if (docLang === "ar" || docLang === "en" || docLang === "fr") return docLang as Language;

        const nav = navigator.language?.slice(0, 2).toLowerCase();
        if (nav === "ar" || nav === "en" || nav === "fr") return nav as Language;
    }

    return defaultLang;
}

export default function useLanguage(
    translations: Translations,
    params?: { lang?: string } | string,
    defaultLang: Language = "en"
) {
    const lang = useMemo(() => resolveLang(params, defaultLang), [params, defaultLang, translations]);

    const t = useCallback(
        (key: string) => {
            return translations[lang]?.[key] ?? translations[defaultLang]?.[key] ?? key;
        },
        [translations, lang, defaultLang]
    );

    const isRTL = lang === "ar";

    return { t, isRTL, lang };
}