import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Noto_Sans_JP } from "next/font/google";
import { Suspense } from "react";
import Header from "./components/Header";
import "./globals.css";
import { NextAuthProvider } from "./lib/next-auth/provider";
import Loading from "./loading";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "販売サイトデモ",
  description: "販売サイトの構築練習",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <NextAuthProvider>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextAuthProvider>
      </body>
    </html>
  );
}
