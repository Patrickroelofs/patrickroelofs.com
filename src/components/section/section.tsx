import { type ReactElement } from 'react';

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps): ReactElement {
  return (
    <section className="mx-auto max-w-screen-2xl px-md">{children}</section>
  );
}

export { Section };
