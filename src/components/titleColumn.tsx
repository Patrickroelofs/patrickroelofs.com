import type { Page, TitleColumnType } from "@/payload-types";
import { cva } from "class-variance-authority";
import React, { type ReactElement } from "react";
import { Blocks } from "./blocks";

const titleColumnStyling = cva("px-12 py-24 gap-8", {
  variants: {
    theme: {
      dark: "bg-black text-white",
      light: "bg-ginger text-black",
    },
    type: {
      column: "flex flex-col",
      row: "sm:grid",
    },
  },
});

const titleStickyStyling = cva("col-start-1 col-end-2 mb-4 sm:mb-auto", {
  variants: {
    type: {
      column: "",
      row: "sm:sticky sm:top-[80px]",
    },
  },
});

function TitleColumn(props: TitleColumnType): ReactElement {
  return (
    <div
      className={titleColumnStyling({
        theme: props.settings.theme,
        type: props.settings.type,
      })}
    >
      <div className={titleStickyStyling({ type: props.settings.type })}>
        <div className="flex justify-between md:items-center md:flex-row flex-col gap-4 md:gap-0 items-start">
          <h2 className="text-3xl lg:text-7xl font-bold lg:font-black max-w-3xl text-pretty leading-tight">
            {props.content.title}
          </h2>
          <Blocks blocks={props.content.button} />
        </div>
      </div>
      <div className="col-start-2 col-end-5 text-lg">
        <Blocks blocks={props.content.blocks} />
      </div>
    </div>
  );
}

export { TitleColumn };
