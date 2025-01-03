import '@/styles/globals.css';
import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';

import { type ReactElement, type ReactNode } from 'react';
import { Navigation } from '@/components/navigation';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body className="bg-ginger h-[6000px]">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
