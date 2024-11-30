import { type ReactElement } from 'react';
import type { Page } from '../../../payload-types';

type SimpleTextProps = Extract<Page['blocks'][0], { blockType: 'simpleText' }>;

export function SimpleText(props: SimpleTextProps): ReactElement {
  const { text } = props;

  return <p>{text}</p>;
}
