import { Analytics } from "@vercel/analytics/react";
import type React from "react";
import type { ReactElement } from "react";

import { Navigation } from "@/patterns/navigation/navigation";
import "@/styles/globals.css";
import "@fontsource-variable/literata";
import "@fontsource-variable/literata/opsz-italic.css";
import "@fontsource-variable/literata/opsz.css";
import "@fontsource-variable/literata/wght-italic.css";

export const metadata = {};

export default function RootLayout(props: {
  children: React.ReactNode;
}): ReactElement {
  const { children } = props;

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
