import type { SimpleTextType } from "@/payload-types";

async function SimpleText(props: SimpleTextType) {
  return <div>{props.content}</div>;
}

export { SimpleText };
