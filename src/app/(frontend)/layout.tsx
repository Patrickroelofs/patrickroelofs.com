import '@/styles/globals.css';
import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

import React, { type ReactElement, type ReactNode } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body className="bg-ginger">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
