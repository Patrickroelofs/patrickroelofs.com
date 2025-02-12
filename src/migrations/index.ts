import * as migration_20250212_204811 from './20250212_204811';

export const migrations = [
  {
    up: migration_20250212_204811.up,
    down: migration_20250212_204811.down,
    name: '20250212_204811'
  },
];
