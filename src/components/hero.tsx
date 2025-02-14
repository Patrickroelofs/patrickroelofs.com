import type { HeroBlockType } from "@/payload-types";
import { Image } from "./image";

function Hero(props: HeroBlockType) {
  return (
    <header className="relative">
      <div className="flex justify-center items-center pt-16 text-redleather border-b-black border-b-2">
        <p className="text-9xl font-bold mb-24 -top-16 left-24 relative">
          {props.leftText}
        </p>
        <Image
          media={props.image}
          width={500}
          height={771}
          quality={100}
          priority
          className="z-10 relative"
        />
        <p className="text-9xl font-bold mb-24 -left-20 top-16 relative z-20">
          {props.rightText}
        </p>
      </div>
    </header>
  );
}

export { Hero };
