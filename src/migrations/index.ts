import * as migration_20250324_202216 from './20250324_202216';
import * as migration_20250326_220610 from './20250326_220610';
import * as migration_20250329_215412 from './20250329_215412';
import * as migration_20250331_204953 from './20250331_204953';
import * as migration_20250331_211928 from './20250331_211928';
import * as migration_20250403_204709 from './20250403_204709';
import * as migration_20250404_211440 from './20250404_211440';
import * as migration_20250406_212426 from './20250406_212426';
import * as migration_20250408_152730 from './20250408_152730';
import * as migration_20250408_170823 from './20250408_170823';
import * as migration_20250408_185836 from './20250408_185836';

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
    name: '20250403_204709',
  },
  {
    up: migration_20250404_211440.up,
    down: migration_20250404_211440.down,
    name: '20250404_211440',
  },
  {
    up: migration_20250406_212426.up,
    down: migration_20250406_212426.down,
    name: '20250406_212426',
  },
  {
    up: migration_20250408_152730.up,
    down: migration_20250408_152730.down,
    name: '20250408_152730',
  },
  {
    up: migration_20250408_170823.up,
    down: migration_20250408_170823.down,
    name: '20250408_170823',
  },
  {
    up: migration_20250408_185836.up,
    down: migration_20250408_185836.down,
    name: '20250408_185836'
  },
];
