import * as migration_20250224_170833 from './20250224_170833';
import * as migration_20250228_162024 from './20250228_162024';

export const migrations = [
  {
    up: migration_20250224_170833.up,
    down: migration_20250224_170833.down,
    name: '20250224_170833',
  },
  {
    up: migration_20250228_162024.up,
    down: migration_20250228_162024.down,
    name: '20250228_162024'
  },
];
