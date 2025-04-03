import type { RichTextType } from "@/payload-types";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as RichTextLexical } from "@payloadcms/richtext-lexical/react";
import { cva } from "class-variance-authority";
import styles from "./richtext.module.css";

const RichTextLexicalStyles = cva(styles.richtext, {
  variants: {
    size: {
      small: styles.small,
      base: styles.base,
      large: styles.large,
    },
  },
});

type RichTextProps = {
  size: "base" | "large" | "small";
} & RichTextType;

const RichText = (props: RichTextProps) => {
  const { size, richText } = props;

  return (
    <RichTextLexical
      data={richText as SerializedEditorState}
      className={RichTextLexicalStyles({
        size,
      })}
    />
  );
};

export { RichText };
