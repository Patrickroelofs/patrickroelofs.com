import { type ReactElement } from 'react';
import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react';
import { jsxConverter } from '@/components/rich-text/jsx-converter';
import type { Page } from '../../../payload-types';

type RichTextProps = Extract<Page['blocks'][0], { blockType: 'richText' }>;

export function RichText(props: RichTextProps): ReactElement {
  const { content } = props;

  return (
    <LexicalRichText
      converters={jsxConverter}
      data={content}
      className="text-fluid-base"
    />
  );
}
