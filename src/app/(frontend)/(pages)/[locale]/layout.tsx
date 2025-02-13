import { Analytics } from "@vercel/analytics/react";

import { routing } from "@/i18n/routing";
import { Navigation } from "@/patterns/navigation/navigation";
import "@/styles/globals.css";
import "@fontsource-variable/literata";
import "@fontsource-variable/literata/opsz-italic.css";
import "@fontsource-variable/literata/opsz.css";
import "@fontsource-variable/literata/wght-italic.css";

export const metadata = {};

type Args = {
  children: React.ReactNode;
  params: Promise<{
    locale: "en" | "nl";
  }>;
};

export default async function RootLayout({ children, params }: Args) {
  // TODO: Pass to navigation and handle locale data
  const { locale } = await params;

  return (
    <html lang="en" className="bg-ginger font-serif text-black">
      <body>
        <Navigation />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
