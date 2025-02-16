import * as migration_20250216_143145 from './20250216_143145';
import * as migration_20250216_170318 from './20250216_170318';
import * as migration_20250216_191809 from './20250216_191809';

export const migrations = [
  {
    up: migration_20250216_143145.up,
    down: migration_20250216_143145.down,
    name: '20250216_143145',
  },
  {
    up: migration_20250216_170318.up,
    down: migration_20250216_170318.down,
    name: '20250216_170318',
  },
  {
    up: migration_20250216_191809.up,
    down: migration_20250216_191809.down,
    name: '20250216_191809'
  },
];
