import { type ReactElement } from 'react';
import { type SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react';
import { jsxConverter } from '@/components/rich-text/jsx-converter';

interface RichTextProps {
  data: SerializedEditorState;
}

export function RichText({ data }: RichTextProps): ReactElement {
  return <LexicalRichText converters={jsxConverter} data={data} />;
}
