import * as migration_20250224_170833 from './20250224_170833';
import * as migration_20250228_162024 from './20250228_162024';
import * as migration_20250228_164523 from './20250228_164523';
import * as migration_20250305_174805 from './20250305_174805';
import * as migration_20250305_194927 from './20250305_194927';
import * as migration_20250306_160918 from './20250306_160918';
import * as migration_20250308_193544 from './20250308_193544';
import * as migration_20250308_202238 from './20250308_202238';
import * as migration_20250313_170743 from './20250313_170743';

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
    name: '20250305_194927',
  },
  {
    up: migration_20250306_160918.up,
    down: migration_20250306_160918.down,
    name: '20250306_160918',
  },
  {
    up: migration_20250308_193544.up,
    down: migration_20250308_193544.down,
    name: '20250308_193544',
  },
  {
    up: migration_20250308_202238.up,
    down: migration_20250308_202238.down,
    name: '20250308_202238',
  },
  {
    up: migration_20250313_170743.up,
    down: migration_20250313_170743.down,
    name: '20250313_170743'
  },
];
