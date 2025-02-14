import * as migration_20250214_172006 from './20250214_172006';

export const migrations = [
  {
    up: migration_20250214_172006.up,
    down: migration_20250214_172006.down,
    name: '20250214_172006'
  },
];
