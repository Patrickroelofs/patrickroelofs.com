import type { TitleWithBlocksType } from "@/payload-types";
import React, { type ReactElement } from "react";
import { Blocks } from "./blocks";

function TitleWithBlocks(props: TitleWithBlocksType): ReactElement {
  return (
    <div className="p-12 pt-20 relative">
      <div className="container sm:grid grid-cols-4 gap-8 mb-12">
        <div className="col-end-2 relative mb-16 sm:mb-auto sm:sticky sm:top-[100px]">
          <div className="pt-4">
            <h2 className="lg:font-black text-3xl lg:text-7xl font-bold">
              {props.title}
            </h2>
          </div>
        </div>
        <div className="col-start-2 col-end-5">
          <Blocks blocks={props.blocks} />
        </div>
      </div>
    </div>
  );
}

export { TitleWithBlocks };
