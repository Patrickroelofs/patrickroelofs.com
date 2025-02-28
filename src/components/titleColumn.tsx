import type { TitleColumnType } from "@/payload-types";
import { cva } from "class-variance-authority";
import React, { type ReactElement } from "react";
import { Blocks } from "./blocks";

const titleColumnStyling = cva("py-7 px-12", {
  variants: {
    theme: {
      dark: "bg-black text-white",
      light: "bg-ginger text-black",
    },
  },
});

function TitleColumn(props: TitleColumnType): ReactElement {
  return (
    <div className={titleColumnStyling({ theme: props.settings.theme })}>
      <div className="sm:grid gap-8 mb-12">
        <div className="col-start-1 col-end-2 mb-4 sm:mb-auto sm:sticky sm:top-[100px]">
          <h2 className="text-3xl lg:text-7xl font-bold lg:font-black pt-4">
            {props.content.title}
          </h2>
        </div>
        <div className="col-start-2 col-end-5 text-lg">
          <Blocks blocks={props.content.blocks} />
        </div>
      </div>
    </div>
  );
}

export { TitleColumn };
