import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yes or No Wheel - Decision Making Tool",
  description:
    "A fun and interactive way to make decisions. Spin the wheel to get a random YES or NO answer.",
  keywords: "yes no, decision maker, spinning wheel, random picker, choice",
  openGraph: {
    title: "Yes or No Wheel - Decision Making Tool",
    description:
      "A fun and interactive way to make decisions. Spin the wheel to get a random YES or NO answer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yes or No Wheel - Decision Making Tool",
    description:
      "A fun and interactive way to make decisions. Spin the wheel to get a random YES or NO answer.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
