import { Analytics } from "@vercel/analytics/react";

import { Navigation } from "@/patterns/navigation/navigation";
import "@/styles/globals.css";
import "@fontsource-variable/literata";
import "@fontsource-variable/literata/opsz-italic.css";
import "@fontsource-variable/literata/opsz.css";
import "@fontsource-variable/literata/wght-italic.css";
import { Footer } from "@/patterns/footer/footer";

export const metadata = {};

type Args = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Args) {
  return (
    <html lang="en" className="bg-ginger font-serif text-black">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
