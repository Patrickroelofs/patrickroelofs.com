import * as migration_20250224_170833 from './20250224_170833';

export const migrations = [
  {
    up: migration_20250224_170833.up,
    down: migration_20250224_170833.down,
    name: '20250224_170833'
  },
];
