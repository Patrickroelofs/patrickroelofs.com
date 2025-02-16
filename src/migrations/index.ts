import * as migration_20250214_172006 from './20250214_172006';
import * as migration_20250216_105352 from './20250216_105352';
import * as migration_20250216_134216 from './20250216_134216';

export const migrations = [
  {
    up: migration_20250214_172006.up,
    down: migration_20250214_172006.down,
    name: '20250214_172006',
  },
  {
    up: migration_20250216_105352.up,
    down: migration_20250216_105352.down,
    name: '20250216_105352',
  },
  {
    up: migration_20250216_134216.up,
    down: migration_20250216_134216.down,
    name: '20250216_134216'
  },
];
