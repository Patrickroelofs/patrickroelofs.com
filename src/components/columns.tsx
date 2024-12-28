import { type ReactElement } from 'react';
import { type ColumnsType } from '@/payload-types';

function Columns(props: ColumnsType): ReactElement {
  console.log(props);

  return <div>Columns</div>;
}

export { Columns };
