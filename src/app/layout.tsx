import { type ReactNode } from 'react';

import '@/styles/variables.css';
import '@/styles/reset.css';
import '@/styles/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
