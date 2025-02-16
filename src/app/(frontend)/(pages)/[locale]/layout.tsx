import { Analytics } from "@vercel/analytics/react";

import { routing } from "@/i18n/routing";
import { Navigation } from "@/patterns/navigation/navigation";
import type { Config } from "@/payload-types";
import "@/styles/globals.css";
import "@fontsource-variable/literata";
import "@fontsource-variable/literata/opsz-italic.css";
import "@fontsource-variable/literata/opsz.css";
import "@fontsource-variable/literata/wght-italic.css";
import { Footer } from "@/patterns/footer/footer";

export const metadata = {};

type Args = {
  children: React.ReactNode;
  params: Promise<{
    locale: Config["locale"];
  }>;
};

export default async function RootLayout({ children, params }: Args) {
  const { locale } = await params;

  return (
    <html lang={locale} className="bg-ginger font-serif text-black">
      <body>
        <Navigation locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
