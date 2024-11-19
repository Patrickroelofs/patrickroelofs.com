import { type ReactElement, type ReactNode } from 'react';
import '../../styles/globals.css';
import '@fontsource-variable/lora';
import '@fontsource-variable/lora/wght-italic.css';
import '@fontsource-variable/instrument-sans/wdth.css';
import '@fontsource-variable/instrument-sans/wdth-italic.css';
import { Analytics } from '@vercel/analytics/next';
import { Navigation } from '@/components/navigation/navigation';
import { Footer } from '@/components/footer/footer';

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html lang="en">
      <body className="bg-sand">
        <Navigation title="Patrick Roelofs" />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
