import { Analytics } from "@vercel/analytics/react";
import type React from "react";
import type { ReactElement } from "react";
import "@/styles/globals.css";

export const metadata = {};

export default function RootLayout(props: {
  children: React.ReactNode;
}): ReactElement {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
