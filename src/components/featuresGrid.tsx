import type { FeaturesGridType } from "@/payload-types";
import React, { type ReactElement } from "react";
import { Icon } from "./icon";

function FeaturesGrid(props: FeaturesGridType): ReactElement {
  return (
    <div className="text-inherit px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {props.content?.features?.map((feature) => (
          <div className="space-y-4" key={feature.id}>
            <Icon name={feature.icon} size={64} />
            <h2 className="text-2xl font-bold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FeaturesGrid };
