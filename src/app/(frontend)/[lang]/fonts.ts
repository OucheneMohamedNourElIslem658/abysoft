import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"

export const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
    display: "swap",
})

export const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
    display: "swap",
})

export const googleSans = localFont({
    src: [
        { path: "./fonts/google-sans/ProductSans-Thin.ttf", weight: "100", style: "normal" },
        { path: "./fonts/google-sans/ProductSans-ThinItalic.ttf", weight: "100", style: "italic" },
        { path: "./fonts/google-sans/ProductSans-Light.ttf", weight: "300", style: "normal" },
        { path: "./fonts/google-sans/ProductSans-LightItalic.ttf", weight: "300", style: "italic" },
        { path: "./fonts/google-sans/ProductSans-Regular.ttf", weight: "400", style: "normal" },
        { path: "./fonts/google-sans/ProductSans-Italic.ttf", weight: "400", style: "italic" },
        { path: "./fonts/google-sans/ProductSans-Medium.ttf", weight: "500", style: "normal" },
        { path: "./fonts/google-sans/ProductSans-MediumItalic.ttf", weight: "500", style: "italic" },
        { path: "./fonts/google-sans/ProductSans-Bold.ttf", weight: "700", style: "normal" },
        { path: "./fonts/google-sans/ProductSans-BoldItalic.ttf", weight: "700", style: "italic" },
        { path: "./fonts/google-sans/ProductSans-Black.ttf", weight: "900", style: "normal" },
        { path: "./fonts/google-sans/ProductSans-BlackItalic.ttf", weight: "900", style: "italic" }
    ],
    variable: "--font-google-sans",
    display: "swap",
    fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
})