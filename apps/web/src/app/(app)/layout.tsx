import { type ReactElement, type ReactNode } from 'react';
import '../../styles/globals.css';
import '@fontsource-variable/lora';
import '@fontsource-variable/lora/wght-italic.css';
import '@fontsource-variable/instrument-sans/wdth.css';
import '@fontsource-variable/instrument-sans/wdth-italic.css';

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html lang="en">
      <body className="bg-sand">{children}</body>
    </html>
  );
}

export default RootLayout;
