import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yesornowheel.top"),
  title: {
    default: "Yes or No Wheel - Make Quick Decisions Instantly",
    template: "%s | Yes or No Wheel",
  },
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
    "decision support",
    "spinning wheel",
    "choice generator",
  ],
  authors: [{ name: "Yes or No Wheel Team", url: "https://yesornowheel.top" }],
  creator: "Yes or No Wheel",
  publisher: "Yes or No Wheel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "utilities",
  classification: "Decision Making Tool, Random Generator, Entertainment",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      unavailable_after: "2026-12-31",
    },
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    yahoo: "yahoo-verification-code-here",
  },
  openGraph: {
    title: "Yes or No Wheel - Make Quick Decisions Instantly",
    description:
      "Spin the wheel to get a quick Yes or No answer. A fun and simple decision-making tool for when you need help making choices. Perfect for quick decisions!",
    url: "https://yesornowheel.top",
    siteName: "Yes or No Wheel",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "ja_JP", "es_ES"],
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Yes or No Wheel - Decision Making Tool",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Yes or No Wheel Logo",
        type: "image/png",
      },
    ],
    videos: [],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yesornowheel",
    creator: "@yesornowheel",
    title: "Yes or No Wheel - Make Quick Decisions Instantly",
    description:
      "Spin the wheel to get a quick Yes or No answer. Perfect for quick decisions!",
    images: ["/android-chrome-512x512.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Yes or No Wheel",
    statusBarStyle: "default",
    startupImage: [
      "/apple-touch-icon.png",
      {
        url: "/apple-touch-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  appLinks: {
    ios: [
      {
        url: "https://yesornowheel.top",
        app_store_id: "1234567890",
        app_name: "Yes or No Wheel",
      },
    ],
    android: [
      {
        url: "https://yesornowheel.top",
        package: "com.yesornowheel.app",
        app_name: "Yes or No Wheel",
      },
    ],
    web: [
      {
        url: "https://yesornowheel.top",
        should_fallback: true,
      },
    ],
  },
  generator: "Next.js 16",
  applicationName: "Yes or No Wheel",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "msapplication-TileColor": "#3b82f6",
    "msapplication-config": "/browserconfig.xml",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "512x512", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        rel: "mask-icon",
        url: "/android-chrome-192x192.png",
        color: "#3b82f6",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
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
