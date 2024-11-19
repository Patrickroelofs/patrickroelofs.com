import { type ReactElement } from 'react';

export function Warning({ message }: { message: string }): ReactElement {
  return (
    <div className="rounded-3xl border-2 border-red bg-red bg-opacity-30 p-sm">
      {message}
    </div>
  );
}
