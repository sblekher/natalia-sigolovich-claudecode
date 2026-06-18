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
  title: "Наталья Сиголович — консультант по детско-родительским отношениям",
  description:
    "Помогаю родителям детей от 2 до 9 лет сохранять спокойствие и управлять своими реакциями в самые сложные моменты.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${rubik.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#fffaf0" }}>{children}</body>
    </html>
  );
}
