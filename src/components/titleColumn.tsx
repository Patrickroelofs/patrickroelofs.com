import type { Page, TitleColumnType } from "@/payload-types";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React, { type ReactElement } from "react";
import { Blocks } from "./blocks";
import { Icon } from "./icon";

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

function TitleColumn(props: TitleColumnType): ReactElement {
  const { button } = props.content as {
    button: Page;
  };

  return (
    <div
      className={titleColumnStyling({
        theme: props.settings.theme,
        type: props.settings.type,
      })}
    >
      <div className="col-start-1 col-end-2 mb-4 sm:mb-auto sm:sticky sm:top-[100px]">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl lg:text-7xl font-bold lg:font-black pt-4 max-w-3xl text-pretty leading-tight">
            {props.content.title}
          </h2>
          {button && (
            <Link
              href={button.slug}
              className="text-2xl border-2 border-black rounded-full px-4 py-2 font-sans flex gap-2 items-center font-semibold"
            >
              {button.title}
              <Icon name="CaretRight" size={24} />
            </Link>
          )}
        </div>
      </div>
      <div className="col-start-2 col-end-5 text-lg">
        <Blocks blocks={props.content.blocks} />
      </div>
    </div>
  );
}

export { TitleColumn };
