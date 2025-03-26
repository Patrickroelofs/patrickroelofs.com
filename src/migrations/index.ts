import * as migration_20250324_202216 from './20250324_202216';
import * as migration_20250326_220610 from './20250326_220610';

export const migrations = [
  {
    up: migration_20250324_202216.up,
    down: migration_20250324_202216.down,
    name: '20250324_202216',
  },
  {
    up: migration_20250326_220610.up,
    down: migration_20250326_220610.down,
    name: '20250326_220610'
  },
];
