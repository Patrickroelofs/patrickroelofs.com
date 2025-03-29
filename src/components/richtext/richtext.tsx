import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as RichTextLexical } from "@payloadcms/richtext-lexical/react";
import styles from "./richtext.module.css";

const RichText = ({ data }: { data: SerializedEditorState }) => {
  return <RichTextLexical data={data} className={styles.richtext} />;
};

export { RichText };
