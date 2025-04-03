import * as migration_20250324_202216 from './20250324_202216';
import * as migration_20250326_220610 from './20250326_220610';
import * as migration_20250329_215412 from './20250329_215412';
import * as migration_20250331_204953 from './20250331_204953';
import * as migration_20250331_211928 from './20250331_211928';
import * as migration_20250403_204709 from './20250403_204709';

export const migrations = [
  {
    up: migration_20250324_202216.up,
    down: migration_20250324_202216.down,
    name: '20250324_202216',
  },
  {
    up: migration_20250326_220610.up,
    down: migration_20250326_220610.down,
    name: '20250326_220610',
  },
  {
    up: migration_20250329_215412.up,
    down: migration_20250329_215412.down,
    name: '20250329_215412',
  },
  {
    up: migration_20250331_204953.up,
    down: migration_20250331_204953.down,
    name: '20250331_204953',
  },
  {
    up: migration_20250331_211928.up,
    down: migration_20250331_211928.down,
    name: '20250331_211928',
  },
  {
    up: migration_20250403_204709.up,
    down: migration_20250403_204709.down,
    name: '20250403_204709'
  },
];
