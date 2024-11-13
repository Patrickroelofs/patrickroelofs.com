import { type ReactElement } from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import heroImage from '../images/hero.jpg';
import logoImage from '../images/logo.svg';
import squigglyImage from '../icons/squiggly.svg';
import arrowsImage from '../icons/arrows.svg';

function Home(): ReactElement {
  return (
    <>
      <header className="mx-auto pb-4 pt-8 max-w-screen-2xl">
        <nav className="flex justify-between mx-4">
          <Link href="/" className="mb-4">
            <Image
              src={logoImage as StaticImageData}
              alt="Patrick Roelofs"
              className="w-auto max-w-full"
            />
          </Link>
        </nav>
        <div className="flex justify-center align-center">
          <Image
            src={heroImage}
            alt=""
            className="w-full mx-auto rounded-3xl"
          />
        </div>
      </header>
      <section className="max-w-screen-2xl mx-auto px-4 my-24">
        <div className="flex justify-center">
          <p className="font-serif text-6xl leading-normal text-pretty relative w-auto min-h-[550px]">
            <span className="relative font-medium">
              Frontend developer
              <Image
                src={squigglyImage as StaticImageData}
                alt=""
                className="w-full inline -bottom-8 absolute left-0 stroke-red"
              />
            </span>{' '}
            with a passion for <span className="italic">creating</span>
            <span className="absolute right-12 top-20">
              <Image
                src={arrowsImage as StaticImageData}
                alt=""
                className=" w-96"
              />
              <span className="text-6xl font-serif font-medium italic absolute -left-[97%] top-[47%] rotate-3 group">
                <span className="not-italic group-hover:visible group-hover:opacity-100 opacity-0 invisible transition-all ease-in-out duration-150">
                  🤯
                </span>
                Amazing stuff
              </span>
              <span className="text-6xl font-serif font-medium italic absolute -left-[135%] top-[85%] rotate-2">
                Engaging websites
              </span>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
