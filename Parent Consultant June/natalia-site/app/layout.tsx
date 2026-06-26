import type { Metadata } from "next";
import { Rubik, Inter } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "cyrillic", "hebrew"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://natashasigolovich.com"),
  title: "Наталья Сиголович — консультант по детско-родительским отношениям",
  description:
    "Помогаю родителям детей от 2 до 9 лет сохранять спокойствие и управлять своими реакциями в самые сложные моменты.",
  openGraph: {
    title: "Наталья Сиголович — консультант по детско-родительским отношениям",
    description:
      "Помогаю родителям детей от 2 до 9 лет сохранять спокойствие и выбирать реакцию в самые сложные моменты.",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/natalia.jpg",
        width: 600,
        height: 800,
        alt: "Наталья Сиголович — консультант по детско-родительским отношениям",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Наталья Сиголович — консультант по детско-родительским отношениям",
    description:
      "Помогаю родителям детей от 2 до 9 лет сохранять спокойствие и выбирать реакцию в самые сложные моменты.",
    images: ["/natalia.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning className={`${rubik.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#fffaf0" }}>{children}</body>
    </html>
  );
}
