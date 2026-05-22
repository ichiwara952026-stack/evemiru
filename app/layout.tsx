import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://evemiru.example.com"),
  title: {
    default: "イベミル | イベント情報プラットフォーム",
    template: "%s | イベミル",
  },
  description:
    "イベミルは全国のイベント情報を探せるプラットフォームです。開催日時・会場・主催情報をまとめてチェックできます。",
  openGraph: {
    title: "イベミル | イベント情報プラットフォーム",
    description:
      "全国のイベント情報を探せるプラットフォーム。興味のあるイベントを見つけて参加しよう。",
    url: "https://evemiru.example.com",
    siteName: "イベミル",
    locale: "ja_JP",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
