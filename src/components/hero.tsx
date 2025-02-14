import type { HeroBlockType } from "@/payload-types";
import { Image } from "./image";

function Hero(props: HeroBlockType) {
  return (
    <header>
      <div className="flex justify-center items-center pt-36">
        <p className="text-9xl font-bold mb-24 left-16 relative">
          {props.leftText}
        </p>
        <Image
          media={props.frontImage}
          width={500}
          height={771}
          quality={100}
          priority
          className="z-10 relative"
        />
        <p className="text-9xl font-bold mb-24 -left-20 relative z-20">
          {props.rightText}
        </p>
      </div>
    </header>
  );
}

export { Hero };
