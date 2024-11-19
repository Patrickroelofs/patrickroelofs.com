import { type ReactElement } from 'react';
import { type Page } from '../../../payload-types';

type ParagraphProps = Extract<Page['blocks'][0], { blockType: 'paragraph' }>;

function Paragraph(props: ParagraphProps): ReactElement {
  const { content } = props;

  return <div>{content}</div>;
}

export { Paragraph };
