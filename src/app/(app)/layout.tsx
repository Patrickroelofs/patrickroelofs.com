import { type ReactElement, type ReactNode } from 'react';
import '../../styles/globals.css';
import '@fontsource-variable/lora';
import '@fontsource-variable/lora/wght-italic.css';
import '@fontsource-variable/instrument-sans/wdth.css';
import '@fontsource-variable/instrument-sans/wdth-italic.css';
import { Analytics } from '@vercel/analytics/next';
import { Navigation } from '@/patterns/navigation/navigation';
import { Footer } from '@/patterns/footer/footer';

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html lang="en">
      <body className="bg-sand">
        <Navigation title="Patrick Roelofs" />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
