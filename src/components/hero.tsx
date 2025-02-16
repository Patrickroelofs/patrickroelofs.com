import logo from "@/images/logo.svg";
import type { HeroBlockType } from "@/payload-types";
import NextImage from "next/image";
import { Image } from "./image";

function Hero(props: HeroBlockType) {
  return (
    <header>
      <div className="flex flex-row overflow-clip h-[800px] w-full relative">
        <span className="w-[calc(100%+32px)] h-[126px] md:-top-2 absolute md:-left-2">
          <NextImage
            src={logo}
            alt="Patrick Roelofs"
            fill
            priority
            className="bottom-0"
          />
        </span>
        <div className="w-full bottom-0 flex justify-center z-10 left-12 relative">
          <Image
            className="absolute bottom-0"
            media={props.image}
            width={500}
            height={650}
            quality={100}
            priority
          />
        </div>
      </div>
    </header>
  );
}

export { Hero };
