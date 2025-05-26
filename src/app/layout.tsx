import type { Metadata } from "next";
import { Helvetica_Neue } from '@/app/fonts'
import "./globals.scss";



export const metadata: Metadata = {
  metadataBase: new URL("https://jpthor.com"),
  title: "JPThor",
  description: "JPThor Website",
  keywords: ['JPThor'],
  authors: [{ name: 'JPThor' }, { name: 'JPThor', url: 'jpthor.com' }],
  appleWebApp: {
    title: 'JPThor',
    statusBarStyle: 'black-translucent',
    startupImage: '/img/jp-favicon.ico',
  },
  openGraph: {
    type: 'website',
    title: 'JPThor',
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
    icon: '/jp-favicon.ico',
    shortcut: '/jp-favicon.ico',
    apple: '/img/jp-favicon.ico',
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
