import { type ReactElement } from 'react';

export function Warning({ message }: { message: string }): ReactElement {
  return (
    <div className="p-fluid-sm border-red bg-red bg-opacity-30 rounded-3xl border-2 text-white">
      {message}
    </div>
  );
}
