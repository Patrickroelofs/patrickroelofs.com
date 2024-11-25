import { type ReactElement } from 'react';

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps): ReactElement {
  return (
    <section className="px-fluid-md mx-auto max-w-(--breakpoint-2xl)">
      {children}
    </section>
  );
}

export { Section };
