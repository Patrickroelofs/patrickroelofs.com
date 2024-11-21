import { type ReactElement } from 'react';

export function Warning({ message }: { message: string }): ReactElement {
  return (
    <div className="p-fluid-sm rounded-3xl border-2 border-red bg-red bg-opacity-30">
      {message}
    </div>
  );
}
