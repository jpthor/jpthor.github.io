import type { Metadata } from "next";
import { Helvetica_Neue } from '@/app/fonts'
import "./globals.scss";



export const metadata: Metadata = {
  metadataBase: new URL("https://jpthor.com"),
  title: "JPThor",
  description: "JPThor Website",
  keywords: ['JPThor'],
  authors: [{ name: 'JPThor' }, { name: 'JPThor', url: 'jpthor.com' }],
  openGraph: {
    siteName: 'JPThor',
    url: 'https://jpthor.com',
    description: "Learn, Move, Create",
    images: 'https://jpthor.com/img/jpthor-og-thumbnail-min.png',
  },
  twitter: {
    card: "summary_large_image",
    site: "https://jpthor.com",
    creator: "JPThor",
    description: "Learn, Move, Create.",
    images: "https://jpthor.com/img/jpthor-og-thumbnail-min.png",
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'favicon-light.svg',
        href: 'favicon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'favicon-light.svg',
        href: 'favicon-dark.svg',
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Helvetica_Neue.className} >{children}</body>
    </html>
  );
}
