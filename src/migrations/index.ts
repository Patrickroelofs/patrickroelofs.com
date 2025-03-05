import * as migration_20250224_170833 from './20250224_170833';
import * as migration_20250228_162024 from './20250228_162024';
import * as migration_20250228_164523 from './20250228_164523';
import * as migration_20250305_174805 from './20250305_174805';
import * as migration_20250305_194927 from './20250305_194927';

export const migrations = [
  {
    up: migration_20250224_170833.up,
    down: migration_20250224_170833.down,
    name: '20250224_170833',
  },
  {
    up: migration_20250228_162024.up,
    down: migration_20250228_162024.down,
    name: '20250228_162024',
  },
  {
    up: migration_20250228_164523.up,
    down: migration_20250228_164523.down,
    name: '20250228_164523',
  },
  {
    up: migration_20250305_174805.up,
    down: migration_20250305_174805.down,
    name: '20250305_174805',
  },
  {
    up: migration_20250305_194927.up,
    down: migration_20250305_194927.down,
    name: '20250305_194927'
  },
];
