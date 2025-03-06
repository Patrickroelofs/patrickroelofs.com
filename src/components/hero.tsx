import logo from "@/images/logo.svg";
import type { HeroBlockType } from "@/payload-types";
import NextImage from "next/image";
import { Image } from "./image";

function Hero(props: HeroBlockType) {
  return (
    <header>
      <div className="flex flex-col overflow-clip h-[800px] w-full">
        <span className="sticky top-12 w-[calc(100%+32px)] h-[145px] -m-2 -mt-4 md:-left-2">
          <NextImage
            src={logo}
            alt="Patrick Roelofs"
            fill
            priority
            className="bottom-0"
          />
        </span>
        <div className="relative h-[800px] w-full">
          <div className="w-full bottom-0 flex justify-center z-10 left-12 absolute">
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
      </div>
    </header>
  );
}

export { Hero };
