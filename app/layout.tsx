import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Poppins, Noto_Sans, } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/Toastcontainer";
import ScrollToTop from "@/components/ScrollTop";
import WhatsAppButton from "@/components/Whatsappbtn";
import Preloader from "@/components/Preloader";
import ClientLayoutWrapper from "@/components/LayoutWrapper";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  preload: true,
  display: "swap",
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  preload: true,
  display: 'swap',
  variable: '--font-poppins',
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  preload: true,
  display: "swap",
  variable: "--font-noto-sans",
});


export const metadata: Metadata = {
  title: "Leadstack",
  keywords: ["HR", "finance", "savings", "transfer"],
  description: "A modern web Leadstack application",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`overflow-x-hidden ${notoSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable}`}
        suppressHydrationWarning
      >
        <ToastProvider />
        <ClientLayoutWrapper hideOn={["/jobs"]}>
          <Preloader>{children}</Preloader>
        </ClientLayoutWrapper>
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}