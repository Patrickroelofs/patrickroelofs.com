import { type ReactElement } from 'react';
import { Hero } from '@/patterns/hero/hero';
import { Navigation } from '@/patterns/navigation/navigation';

function Home(): ReactElement {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
}

export default Home;
