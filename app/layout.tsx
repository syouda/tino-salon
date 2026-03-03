import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TINO | Hair Salon Sapporo",
  description:
    "札幌の高級ヘアサロン「TINO」。洗練されたスタイルと上質な空間でお客様をお迎えします。",
  keywords: ["美容院", "ヘアサロン", "札幌", "TINO", "hair salon", "Sapporo"],
  openGraph: {
    title: "TINO | Hair Salon Sapporo",
    description: "札幌の高級ヘアサロン「TINO」",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={playfair.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
