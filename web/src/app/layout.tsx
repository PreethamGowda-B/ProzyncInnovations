/* src/app/layout.tsx */
import type { Metadata, Viewport } from "next";
import { fontSans, fontHeading } from "../lib/fonts";
import { ThemeProvider, LenisProvider, ToastProvider } from "../providers";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/footer/Footer";
import { LoadingScreen } from "../components/global/LoadingScreen";
import { CustomCursor } from "../components/global/CustomCursor";
import { WhatsAppButton } from "../components/global/WhatsAppButton";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050b18",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Prozync Innovations | Engineering the Future of Business Software",
    template: "%s | Prozync Innovations"
  },
  description: "Prozync Innovations develops enterprise software, AI solutions, SaaS platforms, and custom digital products that help businesses scale with confidence.",
  metadataBase: new URL("https://prozync.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Prozync Innovations | Engineering the Future of Business Software",
    description: "Enterprise software, AI solutions, SaaS platforms, and custom digital products built to scale.",
    url: "/",
    siteName: "Prozync Innovations",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Prozync Innovations | Engineering the Future of Business Software",
    description: "Enterprise software, AI solutions, SaaS platforms, and custom digital products built to scale."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg-primary text-text-primary font-sans flex flex-col antialiased">
        <ThemeProvider>
          <LenisProvider>
            <ToastProvider>
              <LoadingScreen />
              <CustomCursor />
              <WhatsAppButton />
              <Navbar />
              <main id="main-content" className="flex-grow pt-20 flex flex-col">
                {children}
              </main>
              <Footer />
            </ToastProvider>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
