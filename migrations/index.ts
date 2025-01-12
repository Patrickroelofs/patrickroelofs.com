import * as migration_20250112_083634 from './20250112_083634';
import * as migration_20250112_132715 from './20250112_132715';
import * as migration_20250112_160811 from './20250112_160811';

export const migrations = [
  {
    up: migration_20250112_083634.up,
    down: migration_20250112_083634.down,
    name: '20250112_083634',
  },
  {
    up: migration_20250112_132715.up,
    down: migration_20250112_132715.down,
    name: '20250112_132715',
  },
  {
    up: migration_20250112_160811.up,
    down: migration_20250112_160811.down,
    name: '20250112_160811'
  },
];
