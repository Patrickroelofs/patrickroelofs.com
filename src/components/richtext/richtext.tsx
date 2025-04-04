import { spacingStyles } from "@/fields/spacing";
import type { RichTextType } from "@/payload-types";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as RichTextLexical } from "@payloadcms/richtext-lexical/react";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { Icon } from "../icon/icon";
import styles from "./richtext.module.css";

const RichTextLexicalStyles = cva(styles.richtext, {
  variants: {
    size: {
      small: styles.small,
      base: styles.base,
      large: styles.large,
    },
    spacing: spacingStyles,
  },
});

const RichText = (props: RichTextType) => {
  const { size, spacing, richText } = props;

  return (
    <RichTextLexical
      data={richText as SerializedEditorState}
      className={RichTextLexicalStyles({
        size,
        spacing,
      })}
      converters={({ defaultConverters }) => ({
        ...defaultConverters,
        link: ({ node, nodesToJSX, converters }) => {
          return (
            <Link
              href={node.fields.url || "#"}
              target={node.fields.newTab ? "_blank" : undefined}
            >
              {nodesToJSX({ nodes: node.children })}
              {node.fields.newTab && (
                <span className="visually-hidden">opens in a new tab</span>
              )}
              <Icon
                aria-hidden={true}
                className={styles.icon}
                size={24}
                name={node.fields.newTab ? "ArrowSquareOut" : "LinkSimple"}
              />
            </Link>
          );
        },
      })}
    />
  );
};

export { RichText };
