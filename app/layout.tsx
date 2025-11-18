import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yes or No Wheel - Make Quick Decisions Instantly",
  description:
    "Spin the wheel to get a quick Yes or No answer. A fun and simple decision-making tool for when you need help making choices. Perfect for quick decisions!",
  keywords: [
    "yes or no",
    "decision maker",
    "wheel spinner",
    "random choice",
    "decision tool",
    "yes no generator",
    "random decision",
  ],
  authors: [{ name: "Yes or No Wheel" }],
  creator: "Yes or No Wheel",
  publisher: "Yes or No Wheel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Yes or No Wheel - Make Quick Decisions Instantly",
    description:
      "Spin the wheel to get a quick Yes or No answer. A fun decision-making tool.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "ja_JP", "es_ES"],
    siteName: "Yes or No Wheel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yes or No Wheel - Make Quick Decisions",
    description: "Spin the wheel to get a quick Yes or No answer.",
  },
  generator: "Next.js",
  applicationName: "Yes or No Wheel",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://yesornowheel.top"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5B21B6" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0b2e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
