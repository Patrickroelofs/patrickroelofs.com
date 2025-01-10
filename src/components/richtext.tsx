import { type ReactElement } from 'react';
import { RichText as RichTextLexical } from '@payloadcms/richtext-lexical/react';
import { type RichTextType } from '@/payload-types';

function RichText(props: RichTextType): ReactElement | null {
  if (!props.content) return null;

  return (
    <div className="container">
      <RichTextLexical
        data={props.content}
        className="prose prose-xl text-black max-w-full"
      />
    </div>
  );
}

export { RichText };
