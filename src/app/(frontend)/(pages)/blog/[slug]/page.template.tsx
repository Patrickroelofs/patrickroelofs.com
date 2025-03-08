import { Blocks } from "@/components/blocks";
import { Image } from "@/components/image";
import type { Blog, Media } from "@/payload-types";
import type { ReactElement } from "react";

function PageTemplate(props: Blog): ReactElement {
  const coverImage = props.coverImage as Media;

  return (
    <>
      <header className="border-b-2 border-black">
        <div className="relative w-full h-[240px] md:h-[580px]">
          <Image
            media={coverImage}
            placeholder="blur"
            className="object-cover bg-center"
            fill
            priority
          />
        </div>
        <h2 className="text-5xl font-bold my-8 px-4 md:px-0 max-w-7xl mx-auto leading-snug text-pretty">
          {props.title}
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-none">
        <div className="row-start-2 md:row-start-auto md:col-start-1 md:col-end-3 md:border-r-2 border-black p-4 flex justify-center flex-col">
          <div className="max-w-3xl w-full mx-auto">
            <Blocks blocks={props.content.blocks} />
          </div>
        </div>
        <div className="row-start-1 md:row-start-none md:col-start-3 md:col-end-3" />
      </div>
    </>
  );
}

export { PageTemplate };
