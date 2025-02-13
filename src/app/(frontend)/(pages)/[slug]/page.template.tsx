import type { Page } from "@/payload-types";
import type { ReactElement } from "react";

function PageTemplate(props: Page): ReactElement {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}

export { PageTemplate };
