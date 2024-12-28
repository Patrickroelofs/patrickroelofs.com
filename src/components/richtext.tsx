import { type ReactElement } from 'react';
import { RichText as RichTextLexical } from '@payloadcms/richtext-lexical/react';
import { type RichTextType } from '@/payload-types';

function RichText(props: RichTextType): ReactElement | null {
  if (!props.content) return null;

  return <RichTextLexical data={props.content} />;
}

export { RichText };
