import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap"
});

const title = "Pulse — ранний мониторинг состояния клиентов в Telegram";
const description =
  "Пульс — радар для тренера: 30 секунд в день, светофор рисков и ранние сигналы перегруза без отдельного приложения.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pulse.example";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    locale: "ru_RU"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-screen bg-transparent text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
