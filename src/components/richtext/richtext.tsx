import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as RichTextLexical } from "@payloadcms/richtext-lexical/react";
import { cva } from "class-variance-authority";
import styles from "./richtext.module.css";

const RichTextLexicalStyles = cva(styles.richtext, {
  variants: {
    size: {
      base: styles.base,
      large: styles.large,
    },
  },
});

type RichTextProps = {
  data: SerializedEditorState;
  size: "base" | "large";
};

const RichText = ({ data, size }: RichTextProps) => {
  return (
    <RichTextLexical
      data={data}
      className={RichTextLexicalStyles({
        size,
      })}
    />
  );
};

export { RichText };
