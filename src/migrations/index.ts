import * as migration_20250324_202216 from './20250324_202216';

export const migrations = [
  {
    up: migration_20250324_202216.up,
    down: migration_20250324_202216.down,
    name: '20250324_202216'
  },
];
