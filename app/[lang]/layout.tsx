import type { ReactNode } from "react";

interface LangLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
