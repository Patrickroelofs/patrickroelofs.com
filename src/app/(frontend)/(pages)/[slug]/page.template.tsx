import { Blocks } from "@/components/blocks";
import type { Page } from "@/payload-types";
import type { ReactElement } from "react";

function PageTemplate(props: Page): ReactElement {
  return <Blocks blocks={props.content} />;
}

export { PageTemplate };
