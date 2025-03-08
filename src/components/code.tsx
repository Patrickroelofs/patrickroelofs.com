import type { CodeType } from "@/payload-types";
import type { ReactElement } from "react";
import { codeToHtml } from "shiki";

async function Code(props: CodeType): Promise<ReactElement> {
  const html = await codeToHtml(props.content.code, {
    lang: props.settings.language,
    theme: "dark-plus",
  });

  return (
    <div
      className="p-4 bg-[#1E1E1E] text-sm overflow-x-auto my-4"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required to render code blocks
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}

export { Code };
